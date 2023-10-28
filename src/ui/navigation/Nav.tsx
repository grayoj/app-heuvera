import { Bag } from '@/assets/Bag';
import { HeuveraLogo } from '@/assets/HeuveraLogo';
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { SearchInput } from '../inputs/SearchInput';
import 'animate.css';

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className='left-0 top-0 fixed z-50 w-full bg-white border-b border-b-1'>
        <header className='flex min-h-[4rem] w-full max-w-screen-xl items-center justify-between px-4 text-black sm:px-8 relative mx-auto flex-wrap'>
          <a
            className='flex h-16 w-40 flex-none items-center space-x-6'
            aria-label='logo'
          >
            <HeuveraLogo width={31} height={35} />
          </a>
          <div className='relative flex items-center order-1 w-full flex-none sm:order-none sm:h-16 sm:w-auto sm:flex-1 sm:justify-center'>
            <div className='hidden sm:block relative w-fit select-none flex-row justify-center flex items-start transition-[opacity,height] sm:items-center h-8 opacity-100'>
              <div>
                <SearchInput />
              </div>
            </div>
          </div>
          <div className='hidden sm:flex h-16 w-40 flex-none items-center justify-end space-x-4'>
            <Bag height={22} width={23} />
            <UserCircleIcon className='h-7' />
          </div>
          <div className='sm:hidden flex items-center justify-end pr-4'>
            <button
              onClick={() => (menuOpen ? closeMenu() : openMenu())}
              className='text-2xl text-gray-700 hover:text-gray-900'
            >
              <Bars3Icon className='h-7' />
            </button>
          </div>
        </header>
        <div
          className={`fixed inset-0 flex items-center justify-center bg-[#8000FF] text-white animate__animated ${
            menuOpen ? 'animate__fadeInUp' : 'animate__fadeOutDown'
          }`}
          style={{ display: menuOpen ? 'flex' : 'none' }}
        >
          <button
            onClick={closeMenu}
            className='absolute top-4 right-4 text-gray-700 hover-text-gray-900 text-3xl cursor-pointer'
          >
            <XMarkIcon className='h-7 text-white' />
          </button>
          <ul className='space-y-6 text-2xl flex flex-col items-center cursor-pointer'>
            <li className='relative'>
              Student Homes
              <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300'></div>
            </li>
            <li className='relative'>
              Apartments
              <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300'></div>
            </li>
            <li className='relative'>
              Office Spaces
              <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300'></div>
            </li>
          </ul>
        </div>
        <div className='my-4 justify-center items-center hidden sm:block'>
          <div className='flex justify-center space-x-6 text-sm cursor-pointer'>
            <a className='text-gray-700 hover-text-gray-900 bg-subtle p-2 rounded-md border border-1'>
              Student Homes
            </a>
            <a className='text-gray-700 hover-text-gray-900 bg-white p-2 rounded-md'>
              Apartments
            </a>
            <a className='text-gray-700 hover-text-gray-900 bg-white p-2 rounded-md'>
              Office Workspaces
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
