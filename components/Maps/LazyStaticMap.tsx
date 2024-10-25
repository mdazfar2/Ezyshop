"use client";

import dynamic from "next/dynamic";

export interface LazyMapProps {
  latitude: number;
  longitude: number;
}

const StaticMap = dynamic(() => import("@/components/Maps/staticMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function LazyStaticMap({ latitude, longitude }: LazyMapProps) {
  return (
    <main>
      <StaticMap storeLat={latitude} storeLng={longitude} />
    </main>
  );
}

export default LazyStaticMap;
