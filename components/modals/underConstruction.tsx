"use client";
import { Construction } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useConstruction } from "@/context/modalContext";

const UnderConstructionAlert = ({theme}:{theme:string}) => {
  const { isOpen, closeDialog } = useConstruction();

  return (
    <>
      {/* <a
        href="#"
        className="text-customBlue dark:text-Green underline cursor-pointer"
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          openDialog(); // Open the dialog globally
        }}
      >
        This page is under construction
      </a> */}

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="flex items-center justify-center p-6">
          <DialogHeader className="text-center">
            <Construction className={`h-16 w-16 ${theme==='light'? 'text-customTeal':'text-Green'} mx-auto`} />
            <DialogTitle className="text-xl font-bold mt-4 dark:text-black">
              This page is under development
            </DialogTitle>
            <p className="text-gray-600 dark:text-black mt-2">
              We apologize for the inconvenience. Please check back soon.
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UnderConstructionAlert;
