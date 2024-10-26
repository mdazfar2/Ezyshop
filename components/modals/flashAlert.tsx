"use client";
import react from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {  useFlashAlert } from "@/context/flashAlertContext";

// {theme}:{theme:string}

interface FlashAlertProps{
  modalLogo:react.ReactNode;
  modalTitle:string,
  modalDescription:string

}

const FlashAlert:React.FC<FlashAlertProps> = ({modalLogo,modalTitle,modalDescription}) => {
  const { isOpen, closeDialog } = useFlashAlert();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="flex items-center justify-center p-6">
          <DialogHeader className="text-center">
            {modalLogo}
            {/* <Construction className={`h-16 w-16 ${theme==='light'? 'text-customTeal':'text-Green'} mx-auto`} /> */}
            <DialogTitle className="text-xl font-bold mt-4 dark:text-black">
              {/* This page is under development */}
              {modalTitle}
            </DialogTitle>
            <p className="text-gray-600 dark:text-black mt-2">
              {/* We apologize for the inconvenience. Please check back soon. */}
              {modalDescription}
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FlashAlert;
