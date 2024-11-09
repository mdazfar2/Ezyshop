import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Sale {
  name: string;
  email: string;
  avatarSrc: string;
  avatarText: string;
  amount: number;
  storeName: string;
}

const salesData: Sale[] = [
  {
    name: "Amit Sharma",
    email: "amit.sharma@ezyshop.in",
    avatarSrc: "/avatars/amit.png",
    avatarText: "AS",
    amount: 1999.0,
    storeName: "Sharma Electronics",
  },
  {
    name: "Priya Gupta",
    email: "priya.gupta@ezyshop.in",
    avatarSrc: "/avatars/priya.png",
    avatarText: "PG",
    amount: 39.0,
    storeName: "Priya's Boutique",
  },
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@ezyshop.in",
    avatarSrc: "/avatars/ravi.png",
    avatarText: "RK",
    amount: 299.0,
    storeName: "Ravi's Tech Store",
  },
  {
    name: "Neha Yadav",
    email: "neha.yadav@ezyshop.in",
    avatarSrc: "/avatars/neha.png",
    avatarText: "NY",
    amount: 99.0,
    storeName: "Neha's Fashion",
  },
  {
    name: "Sahil Verma",
    email: "sahil.verma@ezyshop.in",
    avatarSrc: "/avatars/sahil.png",
    avatarText: "SV",
    amount: 39.0,
    storeName: "Sahil's Grocery",
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8 flex items-center justify-center flex-col">
      {salesData.map((sale, index) => (
        <div className="flex items-center w-full lg:w-3/4 bg-gray-200 dark:bg-gray-700 p-2 rounded-xl" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatarSrc} alt={sale.name} />
            <AvatarFallback>{sale.avatarText}</AvatarFallback>
          </Avatar>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div className="ml-4 space-y-1  p-2 col-span-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <div className="ml-4 space-y-1  p-2 col-span-1">
              <div className="ml-auto text-sm font-medium">
                +₹{sale.amount.toLocaleString()}
              </div>
              <p className="ml-auto text-sm text-muted-foreground">
                {sale.storeName}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
