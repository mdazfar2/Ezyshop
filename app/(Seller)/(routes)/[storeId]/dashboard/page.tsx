"use client";
import { Heading } from "@/components/ui/heading";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();

  return (
    <div>
      <div className="pl-5 flex flex-col gap-5 items-start pt-5">
        <Heading
          title="Welcome to your dashboard!"
          description="Manage your store with Ezyshop seller dashboard"
        />
        <div>
            Shop Name : {session.data?.user.name}
        </div>
        <div>
            Shop Id : {session.data?.user.id}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
