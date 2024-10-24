// // components/LocationInput.js
// import { latLng, LatLng } from 'leaflet';
// import { SetStateAction, useEffect, useState } from 'react';
// import { useMap } from 'react-leaflet';

// interface LocationInputProps{
//     setPosition:(LatLng:LatLng)=>void
// }
// const LocationInput = ({ setPosition }:LocationInputProps) => {
//   const [address, setAddress] = useState('');
//   const map = useMap();

//   const handleLocationSearch = () => {
//     // Use Nominatim API for geocoding
//     fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.length > 0) {
//           const { lat, lon } = data[0];
//           const ltlg=latLng(lat,lon);
//           setPosition(ltlg);
//           map.setView([lat, lon], 13);
//         }
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Enter your address"
//         className="border rounded p-2"
//       />
//       <button onClick={handleLocationSearch} className="ml-2 bg-blue-500 text-white p-2 rounded">
//         Find Location
//       </button>
//     </div>
//   );
// };

// export default LocationInput;
