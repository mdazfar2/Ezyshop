"use client"
import { useSession } from "next-auth/react";

const Dashboard = () => {

    const session= useSession();

    return ( 
        <>
        {session.data?.user.role}
        {session.data?.user.name}
        </>
     );
}
 
export default Dashboard;