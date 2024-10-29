import LazyMap from "@/components/Maps/LazyMapWithPin";
import MapWithPin from "@/components/Maps/mapWithPinComp";
import ImageUpload from "@/components/ui/image-upload";
import { useGlobalStore } from "@/context/storeContext";

const MapLocationForm = () => {
  const { storeLat, storeLng, setStoreLat, setStoreLng } = useGlobalStore();
  return (
    <div>
      <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
        Store Location
      </h1>
      <h3 className="text-gray-400 mt-2">
        Please drop a pin on the location of your store
      </h3>
      <LazyMap
        latitude={storeLat}
        longitude={storeLng}
        setLatitude={(lat: number) => setStoreLat(lat)}
        setLongitude={(lng: number) => setStoreLng(lng)}
      />
    </div>
  );
};

export default MapLocationForm;
