// "use client";

// // IMPORTANT: the order matters!
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import "leaflet-defaulticon-compatibility";

// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { LatLng, latLng } from "leaflet";

// interface MapProps {
//   center: LatLng;
//   zoom: number;
//   markerPosition: LatLng;
// }
// export default function Map({ center, zoom, markerPosition }: MapProps) {
//   return (
//     <MapContainer
//       center={center}
//       zoom={zoom}
//       scrollWheelZoom={true}
//       style={{ height: "400px", width: "600px" }}
//     >
//       <TileLayer
//         // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={markerPosition}>
//         <Popup>Your Store Location</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// components/MapWithPin.tsx
"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

type MapWithPinProps = {
  // centerr: LatLng;
  onLocationSelect: (lat: number, lng: number) => void;
};

const defaultCenter: LatLngExpression = [28.61, 77.23]; // Default to London

const MapWithPin: React.FC<MapWithPinProps> = ({
  // centerr,
  onLocationSelect,
}) => {
  const [position, setPosition] = useState<LatLngExpression>(defaultCenter);

  // Custom marker icon fix
  useEffect(() => {
    delete (L.Icon.Default.prototype as L.IconDefault)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  // Detect user location using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          onLocationSelect(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          // setPosition(centerr);
          setPosition(defaultCenter) // Fallback to default location
        }
      );
    }
  }, [onLocationSelect]);

  return (
    <MapContainer
      key={position.toString()}
      center={position || defaultCenter}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <DraggableMarker
          position={position}
          onDragEnd={setPosition}
          onLocationSelect={onLocationSelect}
        />
      )}
    </MapContainer>
  );
};

type DraggableMarkerProps = {
  position: LatLngExpression;
  onDragEnd: (pos: LatLngExpression) => void;
  onLocationSelect: (lat: number, lng: number) => void;
};

const DraggableMarker: React.FC<DraggableMarkerProps> = ({
  position,
  // onDragEnd,
  onLocationSelect,
}) => {
  const [draggablePosition, setDraggablePosition] =
    useState<LatLngExpression>(position);
  const map = useMap();

  const handleDragEnd = (event: L.DragEndEvent) => {
    const marker = event.target as L.Marker;
    const { lat, lng } = marker.getLatLng();
    setDraggablePosition([lat, lng]);
    onLocationSelect(lat, lng);
    map.setView([lat, lng]); // Re-center the map
  };

  return (
    <Marker
      position={draggablePosition}
      draggable={true}
      eventHandlers={{ dragend: handleDragEnd }}
    >
      <Popup>Your Store Location</Popup>
    </Marker>
  );
};

export default MapWithPin;
