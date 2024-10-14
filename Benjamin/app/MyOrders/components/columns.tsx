"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type order = {
  id: string;
  avatar: string;
  orderId: string;
  amount: number;
  date: string;
  status: "out for delivery" | "processing" | "delivered" | "failed";
};

export const columns: ColumnDef<order>[] = [
  {
    accessorKey: "avatar",
    header: () => <div></div>,
    cell: ({ row }) => {
      const avatarLink =
        row.getValue("avatar") || "https://github.com/shadcn.png";

      return (
        <Avatar>
          <AvatarImage src={`${avatarLink}`} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Placed On"
    
  },
  {
    accessorKey: "status",
    header:()=> <div className="pl-6">Status</div>,
    cell: ({ row }) => {
      const value = row.getValue("status") || "";
      let statusClass = "";
      switch (value) {
        case "out for delivery":
          statusClass = "bg-yellow-500"; // Example class for "out for delivery"
          break;
        case "processing":
          statusClass = "bg-blue-500"; // Example class for "processing"
          break;
        case "delivered":
          statusClass = "bg-green-500"; // Example class for "delivered"
          break;
        case "failed":
          statusClass = "bg-red-500"; // Example class for "failed"
          break;
        default:
          statusClass = "bg-gray-500"; // Default class
      }
      return (
        <div
          className={`rounded-full w-2/4 text-center flex items-center justify-center font-bold text-gray-200 text-sm p-1 ${statusClass}`}

        >
          {`${value}`}
        </div>
      );
    },
  },

  {
    accessorKey: "orderId",
    header:()=> <div className="pl-6">Details</div> ,
    cell: ({ row }) => {
      const orderId = row.getValue("orderId");
      return (
        <Link href={`MyOrders/${orderId}`}>
          <Button className="border text-sm font-bold text-Green hover:bg-Green hover:text-gray-200 hover:border hover:border-DarkGray">
            view details
          </Button>
        </Link>
      );
    },
  },
];
