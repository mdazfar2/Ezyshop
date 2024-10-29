import { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context data
interface GlobalContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  completed: boolean;
  setCompleted: (completed: boolean) => void;

  storeName: string;
  setStoreName: (name: string) => void;
  storeAddress: string;
  setStoreAddress: (address: string) => void;
  storeUPI: string;
  setStoreUPI: (upi: string) => void;
  storeMobile: string;
  setStoreMobile: (mobile: string) => void;
  storeDescription: string;
  setStoreDescription: (description: string) => void;
  coverUrl: string[];
  setCoverUrl: (url: string[]) => void;
  storeLat: number;
  setStoreLat: (lat: number) => void;
  storeLng: number;
  setStoreLng: (lng: number) => void;

  validstoreName: boolean;
  setValidStoreName: (name: boolean) => void;
  validstoreAddress: boolean;
  setValidStoreAddress: (address: boolean) => void;
  validstoreUPI: boolean;
  setValidStoreUPI: (upi: boolean) => void;
  validstoreMobile: boolean;
  setValidStoreMobile: (mobile: boolean) => void;
  validstoreDescription: boolean;
  setValidStoreDescription: (description: boolean) => void;
  // coverUrl: string;
  // setCoverUrl: (url: string) => void;
  // storeLat: number;
  // setStoreLat: (lat: number) => void;
  // storeLng: number;
  // setStoreLng: (lng: number) => void;

  checkedBox: boolean;
  setCheckedBox: (checkedBox: boolean) => void;

  formCompeleted: boolean;
  setFormCompeleted: (checkedBox: boolean) => void;
}

// Create context with an undefined initial value (to be provided by the Provider)
export const GlobalStoreContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const useGlobalStore = () => {
  const context = useContext(GlobalStoreContext);
  if (!context) {
    throw new Error("useGlobalStore must be used within a GlobalStoreProvider");
  }
  return context;
};
// Define the provider component
export const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeUPI, setStoreUPI] = useState("");
  const [storeMobile, setStoreMobile] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  const [validstoreName, setValidStoreName] = useState(false);
  const [validstoreAddress, setValidStoreAddress] = useState(false);
  const [validstoreUPI, setValidStoreUPI] = useState(false);
  const [validstoreMobile, setValidStoreMobile] = useState(false);
  const [validstoreDescription, setValidStoreDescription] = useState(false);

  const [coverUrl, setCoverUrl] = useState(
    ["https://res.cloudinary.com/drz5akzu1/image/upload/v1729718405/mschk1pmmng6nqnlzl32.jpg"]
  );

  const [storeLat, setStoreLat] = useState(28.61);
  const [storeLng, setStoreLng] = useState(77.23);

  const [checkedBox, setCheckedBox] = useState(false);
  const [formCompeleted, setFormCompeleted] = useState(false);

  return (
    <GlobalStoreContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        completed,
        setCompleted,

        storeName,
        setStoreName,
        storeAddress,
        setStoreAddress,
        storeUPI,
        setStoreUPI,
        storeMobile,
        setStoreMobile,
        storeDescription,
        setStoreDescription,
        coverUrl,
        setCoverUrl,
        storeLat,
        setStoreLat,
        storeLng,
        setStoreLng,
        checkedBox,
        setCheckedBox,
        formCompeleted,
        setFormCompeleted,

        validstoreName,
        setValidStoreName,
        validstoreAddress,
        setValidStoreAddress,
        validstoreUPI,
        setValidStoreUPI,
        validstoreMobile,
        setValidStoreMobile,
        validstoreDescription,
        setValidStoreDescription,
      }}
    >
      {children}
    </GlobalStoreContext.Provider>
  );
};
