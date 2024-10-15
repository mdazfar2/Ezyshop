import { columns, order } from "./components/columns";
import { DataTable } from "./components/datatable";

const options: Intl.DateTimeFormatOptions = {
  weekday: 'short', // 'Tue'
  year: 'numeric', // '2024'
  month: 'short', // 'Oct'
  day: '2-digit', // '01'
  hour: '2-digit', // '10'
  minute: '2-digit', // '30'
  hour12: true, // 12-hour format
};

const orders:order[]  = [
  {
    id: "1",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1001",
    amount: 599,
    date: new Date("2024-10-01T10:30:00").toLocaleString("en-IN",options),
    status: "delivered",
  },
  {
    id: "2",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1002",
    amount: 249,
    date: new Date("2024-10-02T14:00:00").toLocaleString("en-IN",options),
    status: "out for delivery",
  },
  {
    id: "3",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1003",
    amount: 799,
    date: new Date("2024-10-03T18:45:00").toLocaleString("en-IN",options),
    status: "processing",
  },
  {
    id: "4",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1004",
    amount: 999,
    date: new Date("2024-10-04T11:20:00").toLocaleString("en-IN",options),
    status: "failed",
  },
  {
    id: "5",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1005",
    amount: 459,
    date: new Date("2024-10-05T08:10:00").toLocaleString("en-IN",options),
    status: "delivered",
  },
  {
    id: "6",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1006",
    amount: 350,
    date: new Date("2024-10-06T12:45:00").toLocaleString("en-IN",options),
    status: "processing",
  },
  {
    id: "7",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1007",
    amount: 1299,
    date: new Date("2024-10-07T15:00:00").toLocaleString("en-IN",options),
    status: "out for delivery",
  },
  {
    id: "8",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1008",
    amount: 699,
    date: new Date("2024-10-08T09:30:00").toLocaleString("en-IN",options),
    status: "delivered",
  },
  {
    id: "9",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1009",
    amount: 199,
    date: new Date("2024-10-09T13:20:00").toLocaleString("en-IN",options),
    status: "failed",
  },
  {
    id: "10",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1010",
    amount: 799,
    date: new Date("2024-10-10T11:50:00").toLocaleString("en-IN",options),
    status: "out for delivery",
  },
  {
    id: "11",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1011",
    amount: 1599,
    date: new Date("2024-10-11T17:25:00").toLocaleString("en-IN",options),
    status: "delivered",
  },
  {
    id: "12",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1012",
    amount: 999,
    date: new Date("2024-10-12T16:10:00").toLocaleString("en-IN",options),
    status: "processing",
  },
  {
    id: "13",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1013",
    amount: 599,
    date: new Date("2024-10-13T08:45:00").toLocaleString("en-IN",options),
    status: "out for delivery",
  },
  {
    id: "14",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1014",
    amount: 449,
    date: new Date("2024-10-14T10:30:00").toLocaleString("en-IN",options),
    status: "failed",
  },
  {
    id: "15",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1015",
    amount: 799,
    date: new Date("2024-10-15T19:10:00").toLocaleString("en-IN",options),
    status: "delivered",
  },
  {
    id: "16",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1016",
    amount: 300,
    date: new Date("2024-10-16T15:45:00").toLocaleString("en-IN",options),
    status: "processing",
  },
  {
    id: "17",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1017",
    amount: 1200,
    date: new Date("2024-10-17T18:20:00").toLocaleString("en-IN",options),
    status: "out for delivery",
  },
  {
    id: "18",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1018",
    amount: 750,
    date: new Date("2024-10-18T20:10:00").toLocaleString("en-IN",options),
    status: "delivered",
  },
  {
    id: "19",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1019",
    amount: 590,
    date: new Date("2024-10-19T12:30:00").toLocaleString("en-IN",options),
    status: "failed",
  },
  {
    id: "20",
    avatar: "https://github.com/shadcn.png",
    orderId: "EZYSHOP1020",
    amount: 680,
    date: new Date("2024-10-20T10:20:00").toLocaleString("en-IN",options),
    status: "out for delivery",
  },
];


const Orders = () => {
  return (
    <div className="h-full mb-10">
      <div className="text-white flex items-center justify-center bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
        <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
          Your Orders
        </div>
      </div>

    <div className="container w-screen flex items-center justify-center py-10">
      <DataTable columns={columns} data={orders} />
    </div>
 


    </div>
  );
};

export default Orders;
