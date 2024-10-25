import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

export type MapWithPinProps = {
  // centerr: LatLng;
  latitude:number,
  longitude:number,
  onLocationSelect: (lat: number, lng: number) => void;
};



const MapWithPin: React.FC<MapWithPinProps> = ({
  // centerr,
  latitude,
  longitude,
  onLocationSelect,
}) => {
  const defaultCenter: LatLngExpression = [latitude,longitude ];
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
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setPosition([latitude, longitude]);
  //         onLocationSelect(latitude, longitude);
  //       },
  //       (error) => {
  //         console.error("Geolocation error:", error);
  //         // setPosition(centerr);
  //         setPosition(defaultCenter) // Fallback to default location
  //       }
  //     );
  //   }
  // }, [onLocationSelect]);

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
