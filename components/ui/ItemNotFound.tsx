'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ItemNotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleLearnMore = () => {
    window.open('/', '_blank'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center p-5 gap-9">
        {/* Image Section */}
        <div className="image-container">
          <Image
            src="/not-found.png"
            alt="Not Found Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you&#39;re looking for can&#39;t be found.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            You might find these links useful.
          </p>
          <div className="flex gap-5 flex-col space-x-4 mb-8">
            <button
              onClick={handleGoBack}
              className="px-6 py-2 text-customTeal rounded hover:text-blue-600 transition"
            >
              Go Back
            </button>
            <button
              onClick={handleLearnMore}
              className="px-6 py-2 text-customTeal rounded hover:text-blue-600 transition"
            >
              Learn About Ezyshop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemNotFound;
