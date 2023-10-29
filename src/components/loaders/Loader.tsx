import React from "react";
import { PulseLoader } from "react-spinners";
import "animate.css";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="mt-4">
        <PulseLoader color="black" size={10} />
      </div>
    </div>
  );
};
