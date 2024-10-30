
import StaticMap from "@/components/Maps/staticMap";
// import StorePage from "@/components/Maps/mapPage";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import prismadb from "lib/prismadb";
import { Store } from "@prisma/client";
import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface DashboardProps {
  params: {
    storeId: string;
  };
}

const Dashboard: React.FC<DashboardProps> = async ({params}) => {

  // const session = await getServerSession(NEXT_AUTH_CONFIG);

  const storeId=params.storeId

  if (!storeId){
    redirect("/auth/seller")
  };

  let Store: Store|null={
    
      id: "",
      storeName: "",
      storeAddress: "",
      storeLat: 0,
      storeLng: 0,
      storeUPI: "",
      storeMobile: "",
      storeDescription: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      SellerId: "",
      coverUrl: "",
  }

  try {
    Store = await prismadb.store.findUnique({
      where: {
        id:storeId
      },
    });
  } catch (err) {
    console.error(
      "Error fetching Store",
      err instanceof Error ? err.message : err
    );
  }
  // console.log(coverUrl)
  // console.log(Store?.storeLat,Store?.storeLng)
  if (!Store){
    redirect("/setupStore")
  };
  return (
    <div>
      <div className="pl-5 flex flex-col items-center gap-5 text-start pt-5">
        <Heading
          title="Welcome to your dashboard!"
          description="Manage your store with Ezyshop Store dashboard"
        />

        <div className="p-4 bg-gray-100 dark:bg-gray-700 font-nunito dark:text-gray-200 text-xl w-3/4  rounded-lg shadow-md space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              Shop Name:
            </span>
            <span>{Store.storeName}</span>
          </div>

          {/* <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              Owner Name:
            </span>
            <span>{Store.name || "N/A"}</span>
          </div> */}

          <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              Address:
            </span>
            <span>{Store.storeAddress}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              UPI:
            </span>
            <span>{Store.storeUPI}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              Mobile:
            </span>
            <span>{Store.storeMobile}</span>
          </div>

          {/* <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              Email:
            </span>
            <span>{Store.email || "N/A"}</span>
          </div> */}

          <div className="flex justify-between">
            <span className="font-semibold text-customTeal dark:text-Green">
              Description:
            </span>
            <span>{Store.storeDescription}</span>
          </div>

          {Store.coverUrl && (
            <div className="flex items-center justify-between">
              <div className="font-semibold text-customTeal dark:text-Green mb-2">
                Cover Image:
              </div>
              <Image
                height={1000}
                width={1000}
                src={Store.coverUrl}
                alt="Store Cover"
                className="h-60 w-72 object-cover rounded-md"
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="font-semibold text-customTeal dark:text-Green mb-2">
              Store Location:
            </div>
            {/* <LazyStaticMap latitude={Store.storeLat} longitude={Store.storeLng}/> */}
            <div className="w-96">
            <StaticMap storeLat={Store.storeLat} storeLng={Store.storeLng} />
            </div>
          </div>
        </div>
        <Link
          href={`dashboard/edit`}
          className="flex items-center justify-center"
        >
          <Button className=" bg-customTeal dark:bg-Green flex items-center justify-center gap-2">
            <div className="text-2xl">Edit Details</div>
            <Settings />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
