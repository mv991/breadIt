"use client";
import React from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

function CloseModal() {
  const router = useRouter();
  return (
    <Button
      aria-label="Close-modal"
      variant="subtle"
      className="w-6 h-4 p-0 rounded-md"
      onClick={() => router.back()}
    >
      <X className="h-4 w-4"></X>
    </Button>
  );
}

export default CloseModal;
