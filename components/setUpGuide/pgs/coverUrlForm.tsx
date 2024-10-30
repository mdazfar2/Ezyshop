import ImageUpload from "@/components/ui/image-upload";
import { useGlobalStore } from "@/context/storeContext";

const CoverUrlForm = () => {
  const { coverUrl, setCoverUrl } = useGlobalStore();
  return (
    <div>
      <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
        Cover URL 
      </h1>
      <h3 className="text-gray-400 mt-2">
        Please upload a cover URL for your store. 
      </h3>
      <ImageUpload
        value={coverUrl}
        onChange={(url) => setCoverUrl([url])}
        onRemove={() => setCoverUrl([""])}
      />
    </div>
  );
};

export default CoverUrlForm;
