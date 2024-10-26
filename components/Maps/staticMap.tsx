"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

export interface StaticMapProps {
  storeLat: number;
  storeLng: number;
}

const StaticMap: React.FC<StaticMapProps> = ({ storeLat, storeLng }) => {
  useEffect(() => {
    delete (L.Icon.Default.prototype as L.IconDefault)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  const defaultCenter: LatLngExpression = [storeLat, storeLng];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={16}
      className="h-40 w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={defaultCenter}>
        <Popup>Your Store Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default StaticMap;
