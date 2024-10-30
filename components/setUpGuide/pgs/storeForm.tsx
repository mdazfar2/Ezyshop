import React from "react";
import { useGlobalStore } from "context/storeContext";
import FormControl from "./FormControl";

const StoreForm = () => {
  const {
    storeName,
    storeAddress,
    storeUPI,
    storeMobile,
    storeDescription,
    setStoreName,
    setStoreAddress,
    setStoreUPI,
    setStoreMobile,
    setStoreDescription,

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
  } = useGlobalStore();

  const setStoreNameLogic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
    setValidStoreName(e.target.value.length >= 1);
  };

  const setStoreAddressLogic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreAddress(e.target.value);
    setValidStoreAddress(e.target.value.length >= 1);
  };

  const setStoreUPILogic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreUPI(e.target.value);
    setValidStoreUPI(
      e.target.value.length >= 1 && e.target.value.includes("@")
    );
  };

  const setStoreMobileLogic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreMobile(e.target.value);
    setValidStoreMobile(
      e.target.value.length === 10 && /^\d+$/.test(e.target.value)
    );
  };

  const setStoreDescriptionLogic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreDescription(e.target.value);
    setValidStoreDescription(e.target.value.length >= 10);
  };

  return (
    <div>
      <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
        Store Info
      </h1>
      <h3 className="text-gray-400 mt-2">
        Please provide your store name, address, UPI ID, mobile number, and
        description.
      </h3>

      <div className="">
        <FormControl
          label={"Store Name"}
          type={"text"}
          id={"storeName"}
          placeholder={"e.g. Awesome Store"}
          onchange={setStoreNameLogic}
          value={storeName}
          valid={validstoreName}
        />
        <FormControl
          label={"Store Address"}
          type={"text"}
          id={"storeAddress"}
          placeholder={"e.g. 123 Main St, City"}
          onchange={setStoreAddressLogic}
          value={storeAddress}
          valid={validstoreAddress}
        />
        <FormControl
          label={"Store UPI ID"}
          type={"text"}
          id={"storeUPI"}
          placeholder={"e.g. example@upi"}
          onchange={setStoreUPILogic}
          value={storeUPI}
          valid={validstoreUPI}
        />
        <FormControl
          label={"Store Mobile Number"}
          type={"text"}
          id={"storeMobile"}
          placeholder={"e.g. 1234567890"}
          onchange={setStoreMobileLogic}
          value={storeMobile}
          valid={validstoreMobile}
        />
        <FormControl
          label={"Store Description"}
          type={"text"}
          id={"storeDescription"}
          placeholder={"e.g. A brief description of your store."}
          onchange={setStoreDescriptionLogic}
          value={storeDescription}
          valid={validstoreDescription}
        />
      </div>
    </div>
  );
};

export default StoreForm;
