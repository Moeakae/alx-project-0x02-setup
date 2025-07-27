// components/layout/Header.tsx


import React from 'react';
import Link from 'next/link';

const Header = () => {
  return ( 
    <header className="flex gap-4 p-4 bg-gray-100 shadow-md">
      <Link href="/home" className="text-blue-600 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-600 hover:underline">About</Link>
    </header>
  );
};


export default Header;
