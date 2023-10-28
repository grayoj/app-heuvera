import React from 'react';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

interface BottomNavBarProps {}

export const BottomNav: React.FC<BottomNavBarProps> = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-white border-t border-b-1 sm:hidden'>
      <div className='flex justify-between py-2 mx-8'>
        <button className='flex flex-col items-center p-2'>
          <HomeIcon className='h-6 text-[#8000FF]' />
          <span className='text-xs text-[#8000FF]'>Home</span>
        </button>
        <button className='flex flex-col items-center p-2'>
          <MagnifyingGlassIcon className='h-6' />
          <span className='text-xs'>Search</span>
        </button>
        <button className='flex flex-col items-center p-2'>
          <HeartIcon className='h-6' />
          <span className='text-xs'>Favorites</span>
        </button>
        <button className='flex flex-col items-center p-2'>
          <UserCircleIcon className='h-6' />
          <span className='text-xs'>Profile</span>
        </button>
      </div>
    </div>
  );
};
