import React from 'react';

interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  return (
    <div className='relative isolate flex items-center gap-x-6 overflow-hidden bg-subtle px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        <p className='text-sm leading-6 text-gray-900 flex'>
          Create an account to be part of the biggest property market!
        </p>
      </div>
      <div className='flex flex-1 justify-end'>
        <button
          type='button'
          className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
        >
          <span className='sr-only'>Dismiss</span>
        </button>
      </div>
    </div>
  );
};
