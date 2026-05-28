"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/assets/resume/Ali_Jafar_Backend_Resume.pdf";
      link.download = "Ali Jafar - Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
          onClick={handleDownload}
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      );
};

export default DownloadButton;