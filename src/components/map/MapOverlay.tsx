import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface MapOverlayProps {
  onClose: () => void;
}

export const MapOverlay: React.FC<MapOverlayProps> = ({ onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center z-50 justify-center bg-subtle text-white animate__animated animate__slideInUp`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700 hover-text-gray-900 text-3xl cursor-pointer"
      >
        <XMarkIcon className="h-7 text-black" />
      </button>
      <p className="text-sm text-black">
        Map Integration via Google Maps/Mapbox here.
      </p>
    </div>
  );
};
