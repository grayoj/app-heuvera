import useLoadingDelay from "@/hooks/useLoadingDelay";
import { Loader } from "@/components/loaders/Loader";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Nav } from "@/components/navigation/Nav";
import React from "react";
import { MarketplaceGrid } from "@/components/grids/MarketplaceGrid";

interface MarketplacePageProps {}

export const MarketplacePage: React.FC<MarketplacePageProps> = () => {
  const Loading = useLoadingDelay(4000);
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <MarketplaceGrid />
          <BottomNav />
        </>
      )}
    </>
  );
};
