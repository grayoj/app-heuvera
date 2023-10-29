import React, { useState } from "react";
import { FilterButton } from "../buttons/FilterButton";
import {
  AdjustmentsHorizontalIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { FilterModal } from "../modals/FilterPropertyModal";

interface MarketplaceFiltersProps {}

export const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-20 sm:mt-44 ml-4">
        <div className="flex space-x-2">
          <FilterButton
            onClick={openModal}
            label="Filter Properties"
            icon={<AdjustmentsHorizontalIcon className="h-4" />}
            className="text-black p-2 py-3 rounded-md"
          />
          <FilterButton
            label="Display Property Categories"
            icon={<HomeModernIcon className="h-4" />}
            className="text-black p-2 py-3 rounded-md"
          />
        </div>
      </div>
      <FilterModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
