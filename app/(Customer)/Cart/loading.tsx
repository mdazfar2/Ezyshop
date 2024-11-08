// Page title

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezyshop - Cart",
  description: "View and manage your shopping cart. Review your selected items before checkout on Ezyshop.",
};

// components/ui/Loader.tsx

const Loader: React.FC = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  };
  
  export default Loader;
  