"use client";

import { useCallback, useEffect } from 'react';
import MapWithPin from './mapWithPinComp';
import { LazyMapProps } from './LazyMapWithPin';

const StorePage = ({latitude,longitude,setLatitude,setLongitude}:LazyMapProps) => {

  const handleLocationSelect = useCallback((lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  },[setLatitude,setLongitude]);
  useEffect(()=>{
    handleLocationSelect(latitude,longitude)
  },[latitude,longitude,handleLocationSelect])
  
  return (
    <div className="p-4">
      <MapWithPin latitude={latitude} longitude={longitude} onLocationSelect={handleLocationSelect} />
    </div>
  );
};

export default StorePage;

