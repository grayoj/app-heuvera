import { MapIcon } from "@heroicons/react/24/outline";
import React from "react";
import { MapOverlay } from "../map/MapOverlay";
import { useMapState } from "@/hooks/useMapState";

interface MapButtonProps {}

export const MapButton: React.FC<MapButtonProps> = ({}) => {
  const { isMapOpen, handleOpenMap, handleCloseMap } = useMapState();
  return (
    <>
      <button
        onClick={handleOpenMap}
        className="fixed bottom-4 mb-16 sm:mb-0 right-4 sm:right-4 md:right-4 lg:right-4 xl:right-4 lg:bottom-4 xl:bottom-4 flex items-center space-x-2 bg-[#101010] text-white p-2 rounded cursor-pointer"
      >
        <span className="text-sm">Open Map</span>
        <MapIcon className="h-4" />
      </button>
      {isMapOpen && <MapOverlay onClose={handleCloseMap} />}
    </>
  );
};
