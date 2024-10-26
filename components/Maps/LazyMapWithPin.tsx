"use client";

// import { MapWithPinProps } from "@/components/Maps/mapComponent";
import dynamic from "next/dynamic";

export interface LazyMapProps{
  latitude:number,
  longitude:number,
  setLatitude:(latitude:number)=>void,
  setLongitude:(longitude:number)=>void
  
}

const LazyMapWithPin = dynamic(() => import("@/components/Maps/mapWithPin"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function LazyMap({latitude,longitude,setLatitude,setLongitude}:LazyMapProps) {
  return (
    <main>
      <LazyMapWithPin latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude}/>
    </main>
  );
}

