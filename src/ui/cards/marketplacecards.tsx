import useLoadingDelay from '@/hooks/useLoadingDelay';
import { Loader } from '@/ui/loaders/Loader';
import React from 'react';
import { BiBath, BiBed } from "react-icons/bi";
import Image from "next/image";
import proptyimg from "../../assets/homesc.jpeg";


interface MarketplaceCards { }

export const MarketplaceCards: React.FC<MarketplaceCards> = () => {

    return (
        <>
            <div className="rounded-md sm:w-full md:w-72 h-auto sm:h-auto md:h-80 mx-4 my-2.5">
                <div className="w-full h-64 md:h-56 lg:h-56 xl:h-56 2xl:h-56 rounded-md">
                    <Image src={proptyimg} className="w-full h-64 md:h-56 lg:h-56 xl:h-56 2xl:h-56 rounded-md" alt="" />
                </div>
                <div className="m-2 sm:m-2 md:m-1.5">
                    <h1 className="font-inter text-2xl sm:text-xl md:text-xl text-black">Oakridge Cottage</h1>
                    <h1 className="font-inter text-base sm:text-base md:text-base text-gray-700">Edgbaston</h1>
                    <div className="flex justify-between mt-1">
                        <div className="">
                            <h1 className="text-purple-600 font-bold text-lg sm:text-base md:text-lg font-inter">$57<span className="text-xs text-gray-800 font-medium px-2">Per night</span></h1>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="rounded-lg px-3 py-1 flex gap-1 justify-center">
                                <BiBed className="text-lg" />
                                <h1 className="font-inter text-sm">2</h1>
                            </div>
                            <div className="rounded-lg px-3 py-1 flex gap-1 justify-center">
                                <BiBath className="text-lg" />
                                <h1 className="font-inter text-sm">1</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
