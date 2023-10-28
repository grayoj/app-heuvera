import useLoadingDelay from '@/hooks/useLoadingDelay';
import { Loader } from '@/ui/loaders/Loader';
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
          <Nav />
          <BottomNav />
        </>
      )}
    </>
  );
};
