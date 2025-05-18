"use client";


import { Button } from "@/components/ui/button";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "sonner";

type CopyButtonProps = {
  url: string;
};

const CopyButton = ({ url }: CopyButtonProps) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("Link copied!"))
      .catch(() => toast.error("Failed to copy link"));
  };

  return (
    <Button
      onClick={copyToClipboard}
      className="p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl dark:bg-gray-800/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
    >
      <FaRegCopy   className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary" />
    </Button>
  );
};

export default CopyButton;
