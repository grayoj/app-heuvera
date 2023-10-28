import { Banner } from '@/ui/navigation/Banner';
import { Nav } from '@/ui/navigation/Nav';
import React from 'react';

interface MarketplacePageProps {}

export const MarketplacePage: React.FC<MarketplacePageProps> = () => {
  return (
    <>
      <Banner />
      <Nav />
    </>
  );
};
