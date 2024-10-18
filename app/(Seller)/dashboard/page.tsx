"use client"
import { useSession } from "next-auth/react";

const dashboard = () => {

    const session= useSession();

    return ( 
        <>
        {session.data?.user.role}
        {session.data?.user.name}
        </>
     );
}
 
export default dashboard;