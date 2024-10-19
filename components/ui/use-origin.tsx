import { useEffect, useState } from "react"

export const useOrigin = () =>{
    const[mounted,setMounted]=useState(false);

    //because window is oply available on the client side, the following are some safety checks to assign url to origin
    const origin=typeof window !== "undefined" && window.location.origin? window.location.origin: '';

    useEffect(()=>{
        setMounted(true)
    },[]);

    if(!mounted){
        return '';
    }

    return origin;
}