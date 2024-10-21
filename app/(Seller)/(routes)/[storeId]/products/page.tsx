import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { ProductClient } from "./components/client";
import { ProductColumn } from "./components/columns";
import { Category, Product as P} from "@prisma/client";

interface Product extends P {
  category: Category;
}

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const Products: Product[] = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedProducts: ProductColumn[] = Products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: item.price,
    category: item.category.name,
    description : item.description,
    quantity : item.quantity,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="felx-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
