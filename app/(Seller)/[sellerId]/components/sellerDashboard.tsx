import { Store } from "@prisma/client";
import StoreCard from "./storeCard";

interface sellerDashboardProps {
  stores: Store[];
}

const SellerDashboard: React.FC<sellerDashboardProps> = ({ stores }) => {
  // console.log(stores)
  return (
    <div className="flex items-center justify-center flex-col gap-10">
        <div className="text-white w-full flex items-center justify-center  bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className=" text-4xl md:text-7xl text-gray-200 font-bold font-handlee">
            Your Stores
        </div>
      </div>
      <div className="flex px-10 items-center flex-col justify-center  w-full  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stores.map((store) => (
      
          <StoreCard key={store.id} card={store} />

        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;
