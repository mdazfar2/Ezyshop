"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "../ui/modal";
import Link from "next/link";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  //   onConfirm: () => void;
  loading: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  //   onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Welcome to Ezyshop!"
      description="Are you a customer or a seller?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Link href="/auth/customer">
          <Button
            disabled={loading}
            className="bg-customTeal dark:bg-Green  hover:border rounded-xl"
            onClick={onClose}
          >
            customer
          </Button>
        </Link>
        <Link href="/auth/seller">
          <Button
            disabled={loading}
            className="bg-customTeal dark:bg-Green  hover:border rounded-xl"
            onClick={onClose}
          >
            seller
          </Button>
        </Link>
      </div>
    </Modal>
  );
};
