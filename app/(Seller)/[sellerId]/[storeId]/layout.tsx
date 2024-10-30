import prismadb from "lib/prismadb";
import { Billboard, Category, Product, Store } from "@prisma/client";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { StoreMainNav } from "./components/storeNav";

interface StoreLayoutProps {
  params: {
    storeId: string;
    sellerId: string;
  };
  children: ReactNode;
}

interface StoreWithDep extends Store {
  billboards: Billboard[];
  categories: Category[];
  products: Product[];
}

export default async function StoreLayout({
  params,
  children,
}: StoreLayoutProps) {
  const { storeId, sellerId } = params;

  if (!storeId || !sellerId) {
    redirect("/auth/seller");
  }

  let store: StoreWithDep | null = null;

  try {
    store = await prismadb.store.findUnique({
      where: { id: storeId },
      include: {
        billboards: true,
        products: true,
        categories: true,
      },
    });

    if (!store) {
      redirect("/auth/seller");
    }
  } catch (err) {
    console.error("Failed to fetch store:", err);
  }

  const isStoreComplete =
    store?.billboards.length &&
    store.categories.length &&
    store.products.length;

  const message = !isStoreComplete ? (
    <div className="p-4 rounded-md bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
      <h3 className="text-lg font-semibold">Incomplete Store Setup</h3>
      <p className="mt-2">
        Please add at least <span className="font-bold">1 billboard</span>,{" "}
        <span className="font-bold">1 category</span>, and{" "}
        <span className="font-bold">1 product</span> to complete your store
        setup!
      </p>
    </div>
  ) : null;

  return (
    <>
      <StoreMainNav sellerId={sellerId} storeId={storeId} />
      {message}
      {children}
    </>
  );
}
