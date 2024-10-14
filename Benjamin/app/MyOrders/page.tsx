import OrderCard from "./components/orderCard";

const Orders = () => {
  return (
    <div className="h-full mb-10">
      <div className="text-white flex items-center justify-center bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
        <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
          Your Orders
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4  flex gap-5 items-center justify-center flex-col">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </div>
  );
};

export default Orders;
