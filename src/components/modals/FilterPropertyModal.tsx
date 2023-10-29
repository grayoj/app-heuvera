import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-96 p-6 border-[#e5e7eb] mx-2 rounded-md border-[1.5px] shadow-lg animate__animated animate__slideInUp">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M6.354 8L1.354 3 2.647 1.646 8 6.293 13.354 1.646 14.647 3.354 9.293 8 14.647 12.646 13.354 14.354 8 9.707 2.646 14.354 1.354 13.061 6.708 8z" />
          </svg>
        </button>

        <div className="my-2 justify-center flex text-center mr-2"></div>
        <div>
          <div className="text-center">
            <p className="mb-4 text-lg font-semibold">Filter Properties</p>
          </div>

          <div className="text-md my-1 font-semibold">Room Options</div>
          <hr />

          <div className="flex space-x-3">
            <div className="my-2">
              <label className="text-sm">Bedroom Count</label>
              <input
                type="number"
                min="0"
                name="bedroom_count"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="my-2">
              <label className="text-sm">Bathroom Count</label>
              <input
                type="number"
                min="0"
                name="bathroom_count"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="my-2">
              <label className="text-sm">Accomodate Count</label>
              <input
                type="number"
                min="0"
                name="bedroom_count"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="my-2">
              <label className="text-sm">Living Room Count</label>
              <input
                type="number"
                min="0"
                name="bathroom_count"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="text-md my-1 font-semibold">Options</div>
          <hr />

          <div className="my-4">
            <select
              name="availabilityType"
              className="border rounded-md px-3 py-2.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
            >
              <option value="purchase">Purchase</option>
              <option value="rent">Rent</option>
              <option value="rent">Lease</option>
            </select>
          </div>

          <div className="text-md my-1 font-semibold">Pricing Filters</div>
          <hr />

          <div className="flex space-x-3">
            <div className="my-2">
              <label className="text-sm">Min Price</label>
              <input
                type="number"
                min="0"
                name="minPrice"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="my-2">
              <label className="text-sm">Max Price</label>
              <input
                type="number"
                min="0"
                name="maxPrice"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="text-md my-1 font-semibold">Date Selection</div>
          <hr />

          <div className="flex space-x-3">
            <div className="my-2">
              <label className="text-sm">Start Date</label>
              <input
                type="date"
                name="dateInput"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="my-2">
              <label className="text-sm">Start Date</label>
              <input
                type="date"
                name="dateInput"
                className="border rounded-md px-3 py-1.5 w-full focus:border-neutral-300 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="text-center my-4">
            <button
              type="submit"
              onClick={onClose}
              className="w-full hover:bg-purple-50 hover:border-neutral-300 text-sm font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline cursor-pointer border border-1 flex items-center justify-center space-x-1"
            >
              <p>Filter Search</p>
              <AdjustmentsHorizontalIcon className="h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
