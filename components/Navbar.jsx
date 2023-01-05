import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';

const Navbar = () => {
  const { theme, setTheme} = useTheme();
  return (

    /* for the nagivation bar */
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer">
            <Image src={images.logo02} objectFit="contian" width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">CryptoMarket</p>
          </div>
        </Link>
        <Link href="/">
          {/* make display = flex being not hidden */}
          <div className="hidden md:flex" onClick={()=>{}}>
            <Image src={images.logo02} objectFit="contian" width={32} height={32} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={()=>{}} />
          <label htmlFor="checkbox" className="bg-black rounded-2xl p-1 relative  flexBetween w-8 h-4 label">
            <i className="fas fa-sun fa-shake" />
            <i className="fas fa-moon fa-shake" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
