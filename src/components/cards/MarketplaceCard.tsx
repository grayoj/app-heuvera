import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import Image from "next/image";
import { formatPrice } from "@/helpers/priceFormatter";

interface MarketplaceCardProps {
  title: string;
  location: string;
  price: number;
  imagePath: string;
  numBeds: number;
  numBaths: number;
}

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  location,
  price,
  imagePath,
  numBeds,
  numBaths,
}) => {
  return (
    <div className="rounded-md sm:w-full md:w-72 h-auto sm:h-auto md:h-80 mx-4 my-2.5">
      <div className="w-full h-64 md:h-56 lg:h-56 xl:h-56 2xl:h-56 rounded-md">
        <Image
          className="w-full h-64 md:h-56 lg:h-56 xl:h-56 2xl:h-56 rounded-md"
          alt=""
          width={100}
          height={100}
          src={imagePath}
        />
      </div>
      <div className="m-2 sm:m-2 md:m-1.5">
        <h1 className="text-md sm:text-md md:text-md text-black">{title}</h1>
        <h1 className="text-sm sm:text-sm md:text-sm text-gray-700">
          {location}
        </h1>
        <div className="flex justify-between mt-1">
          <h1 className="font-semibold text-lg sm:text-base md:text-lg">
            {formatPrice(price)}
            <span className="text-xs text-gray-700 px-2">Per Year</span>
          </h1>
          <div className="flex gap-1.5">
            <div className="rounded-lg px-3 py-1 flex gap-1 justify-center">
              <BiBed className="text-lg" />
              <h1 className=" text-sm">{numBeds}</h1>
            </div>
            <div className="rounded-lg px-3 py-1 flex gap-1 justify-center">
              <BiBath className="text-lg" />
              <h1 className=" text-sm">{numBaths}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
