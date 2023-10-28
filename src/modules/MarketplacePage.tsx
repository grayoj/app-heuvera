import useLoadingDelay from '@/hooks/useLoadingDelay';
import { Loader } from '@/ui/loaders/Loader';
import { Banner } from '@/ui/navigation/Banner';
import { BottomNav } from '@/ui/navigation/BottomNav';
import { Nav } from '@/ui/navigation/Nav';
import React from 'react';

interface MarketplacePageProps {}

export const MarketplacePage: React.FC<MarketplacePageProps> = () => {
  const Loading = useLoadingDelay(4000);
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <Nav />
          <BottomNav />
        </>
      )}
    </>
  );
};
