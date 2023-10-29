import React from "react";
import { MarketplaceCard } from "../cards/MarketplaceCard";

interface MarketplaceGridProps {}

export const MarketplaceGrid: React.FC<MarketplaceGridProps> = () => {
  const cards = [
    {
      title: "One Room Dorm",
      location: "Apo, Lokogoma",
      price: 57000,
      imagePath: "https://i.ibb.co/fqJFSnt/property.jpg",
      numBeds: 1,
      numBaths: 1,
    },
    {
      title: "Oakridge Cottage",
      location: "Edgbaston",
      price: 57,
      imagePath: "https://i.ibb.co/fqJFSnt/property.jpg",
      numBeds: 2,
      numBaths: 1,
    },
    {
      title: "Oakridge Cottage",
      location: "Edgbaston",
      price: 57,
      imagePath: "https://i.ibb.co/fqJFSnt/property.jpg",
      numBeds: 2,
      numBaths: 1,
    },
    {
      title: "Oakridge Cottage",
      location: "Edgbaston",
      price: 57,
      imagePath: "https://i.ibb.co/fqJFSnt/property.jpg",
      numBeds: 2,
      numBaths: 1,
    },
    {
      title: "Oakridge Cottage",
      location: "Edgbaston",
      price: 57,
      imagePath: "https://i.ibb.co/fqJFSnt/property.jpg",
      numBeds: 2,
      numBaths: 1,
    },
  ];

  return (
    <div className="my-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="col-span-1">
          <MarketplaceCard {...card} />
        </div>
      ))}
    </div>
  );
};
