"use client"
import { useSession } from "next-auth/react";

const Dashboard = () => {

    const session= useSession();

    return ( 
        <>
        {session.data?.user.role}
        <br></br>
        {session.data?.user.name}
        </>
     );
}
 
export default Dashboard;