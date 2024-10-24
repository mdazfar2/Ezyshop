"use client";

import { useCallback, useEffect, useState } from 'react';
import MapWithPin from '@/components/Maps/map';

const StorePage = () => {
  const [latitude, setLatitude] = useState<number>(28.61);
  const [longitude, setLongitude] = useState<number>(77.23);

  const handleLocationSelect = useCallback((lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  },[]);
  useEffect(()=>{
    handleLocationSelect(latitude,longitude)
  },[latitude,longitude,handleLocationSelect])

  const handleSubmit = async () => {
    if (latitude && longitude) {
      const response = await fetch('/api/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latitude, longitude }),
      });

      if (response.ok) {
        alert('Location saved successfully!');
      } else {
        alert('Failed to save location.');
      }
    } else {
      alert('Please select a location.');
    }
  };
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Select Your Store Location: {latitude}-{longitude}</h1>

      <MapWithPin onLocationSelect={handleLocationSelect} />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Save Location
      </button>
    </div>
  );
};

export default StorePage;

