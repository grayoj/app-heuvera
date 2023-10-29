import useLoadingDelay from '@/hooks/useLoadingDelay';
import { MarketplaceCards } from '@/ui/cards/marketplacecards';
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
          <div className='w-full flex flex-wrap justify-center gap-6 mt-20 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40'>
          <MarketplaceCards/>
          <MarketplaceCards/>
          <MarketplaceCards/>
          </div>
          <BottomNav />
        </>
      )}
    </>
  );
};
