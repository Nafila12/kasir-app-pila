import React from 'react'
import Link from "next/link";
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white-500 w-screen min-h-screen">
      {children}
    </div>
  );
};

export default MainLayout

// rafce