import { useGlobalStore } from "context/storeContext";

import { data } from "./sideBarConstants";

const Sidebar = () => {
  const { 
    storeName, storeAddress, storeUPI, storeMobile, storeDescription, 
    setValidStoreName, setValidStoreAddress, setValidStoreUPI, 
    setValidStoreMobile, setValidStoreDescription, 
    currentStep, setCurrentStep, setFormCompeleted 
  } = useGlobalStore();
  
  const changeStep = (id:number) => {
    let allValid = true;
  
    // Validate each field and update validity states
    if (storeName.trim().length < 1) {
      setValidStoreName(false);
      allValid = false;
    } else {
      setValidStoreName(true);
    }
  
    if (storeAddress.trim().length < 1) {
      setValidStoreAddress(false);
      allValid = false;
    } else {
      setValidStoreAddress(true);
    }
  
    if (storeUPI.trim().length < 1 || !storeUPI.includes("@")) {
      setValidStoreUPI(false);
      allValid = false;
    } else {
      setValidStoreUPI(true);
    }
  
    if (storeMobile.trim().length !== 10 || !/^\d+$/.test(storeMobile)) {
      setValidStoreMobile(false);
      allValid = false;
    } else {
      setValidStoreMobile(true);
    }
  
    if (storeDescription.trim().length < 10) {
      setValidStoreDescription(false);
      allValid = false;
    } else {
      setValidStoreDescription(true);
    }
  
    // Move to the next step only if all fields are valid
    if (allValid) {
      setCurrentStep(id);
    }
  
    // Reset the form completion status
    setFormCompeleted(false);
  };
  

  return (
    <>
      <aside className="bg-mobile absolute top-0 left-0 right-0 md:relative md:bg-desktop h-[50vh] md:h-full p-8 overflow-hidden md:rounded-xl gap-4 md:gap-0 w-screen md:w-[42.5%] flex flex-row md:flex-col items-start md:justify-start justify-center">
        {data.map((data, index) => {
          const { id, step, title } = data;

          return (
            <div
              key={index}
              className="flex items-center bg-black rounded-lg p-2 space-x-4 leading-4 sm:mb-8">
              <div onClick={() => changeStep(id)} className={`md:w-8 cursor-pointer md:h-8 w-10 h-10 rounded-full flex items-center justify-center font-medium ${currentStep === id ? 'border border-customBlue bg-customTeal text-gray-200' : 'border border-primary-lightBlue text-secondary-lightGray' }`}>
                {id}
              </div>
              <div className="hidden md:block">
                <p className="uppercase font-handlee text-customTeal  text-sm font-medium">
                  {step}
                </p>
                <p className="uppercase font-handlee text-customTeal  font-medium tracking-wider">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </aside>
    </>
  );
};

export default Sidebar;
