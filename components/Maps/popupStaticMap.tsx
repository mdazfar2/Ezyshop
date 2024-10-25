// "use client";

// import { useEffect, useState } from "react";
// import StaticMap, { StaticMapProps } from "./staticMap";

// interface PopupStaticMapProps extends StaticMapProps {
//   isOpen: boolean;
//   onClose: () => void;
//   loading: boolean;
// }

// const PopupStaticMap: React.FC<PopupStaticMapProps> = ({
//   storeLat,
//   storeLng,
//   isOpen,
//   onClose,
//   loading,
// }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted || !isOpen) {
//     return null; // Don't render if not mounted or not open
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//         <button onClick={onClose} className="mb-2 text-right text-gray-500">
//           Close
//         </button>
//         {loading ? (
//           <div className="flex items-center justify-center">Loading...</div>
//         ) : (
//           <StaticMap storeLat={storeLat} storeLng={storeLng} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopupStaticMap;
