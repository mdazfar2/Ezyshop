"use client";

// import { MapWithPinProps } from "@/components/Maps/mapComponent";
import dynamic from "next/dynamic";

const LazyMapWithPin = dynamic(() => import("@/components/Maps/mapPage"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function LazyMap() {
  return (
    <main>
      <LazyMapWithPin/>
    </main>
  );
}

