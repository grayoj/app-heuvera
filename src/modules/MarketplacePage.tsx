import { SearchInput } from '@/ui/inputs/SearchInput';
import { Banner } from '@/ui/navigation/Banner';
import { BottomNav } from '@/ui/navigation/BottomNav';
import { Nav } from '@/ui/navigation/Nav';
import React from 'react';

interface MarketplacePageProps {}

export const MarketplacePage: React.FC<MarketplacePageProps> = () => {
  return (
    <>
      <Banner />
      <Nav />
      <SearchInput />
      <BottomNav />
    </>
  );
};
