import { useGlobalStore } from "@/context/storeContext";
import { MouseEventHandler } from "react";
import CoverUrlForm from "./pgs/coverUrlForm";
import MapLocationForm from "./pgs/mapLocationForm";
import StoreForm from "./pgs/storeForm";

const Main = ({ sellerId }: { sellerId: string }) => {
  const {
    storeName,
    storeAddress,
    storeUPI,
    storeMobile,
    storeDescription,
    setValidStoreName,
    setValidStoreAddress,
    setValidStoreUPI,
    setValidStoreMobile,
    setValidStoreDescription,
    currentStep,
    setCurrentStep,
    formCompeleted,
    completed,
    setCompleted,
    submitForm
  } = useGlobalStore();

  currentStep === 1 ? setCompleted(false) : setCompleted(true);

  const nextStep: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

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
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

 
  return (
    <div className="md:overflow-hidden md:min-h-full md:shadow-none shadow-md mx-auto md:m-0 rounded-xl md:rounded-none md:w-full w-[100%] md:bg-transparent min-h-[400px] bg-white z-10 mt-[84px]">
      <form className="md:mx-16 md:my-0 mx-6 my-6 py-0 md:py-2 relative h-full">
        {/* {currentStep} */}
        {currentStep === 1 && <StoreForm />}
        {currentStep === 2 && <CoverUrlForm />}
        {currentStep === 3 && <MapLocationForm />}

        {!formCompeleted && (
          <footer className="md:block hidden w-full left-0 right-0 bottom-0">
            <div className="flex">
              <div className="mr-auto mt-2">
                {completed && (
                  <button onClick={goBack} className={"bg-customTeal rounded-lg p-2"}>
                    Go Back
                  </button>
                )}
              </div>
              <div className="text-right text-sm mt-2">
                <button
                  onClick={currentStep === 3 ? (e)=>{
                    e.preventDefault()
                    submitForm(sellerId)
                   } : nextStep}
                  className={
                    currentStep === 3
                      ? "bg-customBlue rounded-lg p-2"
                      : "bg-customTeal rounded-lg p-2"
                  }
                >
                  {currentStep === 3 ? "Confirm" : "Next Step"}
                </button>
              </div>
            </div>
          </footer>
        )}

        {!formCompeleted && (
          <footer className="fixed  md:hidden block w-full p-3 left-0 right-0 bottom-0">
            <div className="flex">
              <div className="mr-auto">
                {completed && (
                  <button onClick={goBack} className={"bg-transparent text-gray-400 hover:text-customTeal"}>
                    Go Back
                  </button>
                )}
              </div>
              <div className="text-right">
                <button
                  onClick={currentStep === 3 ? (e)=>{
                    e.preventDefault()
                    submitForm(sellerId)
                   } : nextStep}
                  className={currentStep === 3 ? "bg-customBlue" : "bg-customTeal"}
                >
                  {currentStep === 3 ? "Confirm" : "Next Step"}
                </button>
              </div>
            </div>
          </footer>
        )}
      </form>
    </div>
  );
};

export default Main;
