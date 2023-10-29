import { useState } from 'react';

export const useMapState = () => {
 const [isMapOpen, setIsMapOpen] = useState(false);

 const handleOpenMap = () => {
  setIsMapOpen(true);
 };

 const handleCloseMap = () => {
  setIsMapOpen(false);
 };

 return { isMapOpen, handleOpenMap, handleCloseMap };
}
