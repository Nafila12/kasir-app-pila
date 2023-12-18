import React, { ReactElement } from "react";
import Link from "next/link";
import NavLink  from "next/link";
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
} from "@heroicons/react/20/solid";

type MenuItem = {
  name: string;
  icon: ReactElement | null;
  link: string;
  isActive: boolean;
};
const menu1: MenuItem[] = [
  {
    name: "Home",
    icon: <HomeModernIcon width={18} className="text-gray-800" />,
    link: "/",
    isActive: false,
  },
  {
    name: "Category",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/category",
    isActive: false,
  },
  {
    name: "Jenis",
    icon: <BellAlertIcon width={18} className="text-gray-800" />,
    link: "/jenis",
    isActive: false,
  },
  {
    name: "Menu",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/menu",
    isActive: false,
  },
  {
    name: "Stok",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/stok",
    isActive: false,
  },
  {
    name: "Pelanggan",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/pelanggan",
    isActive: false,
  },
  {
    name: "Meja",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/meja",
    isActive: false,
  },
  {
    name: "Pemesanan",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/pemesanan",
    isActive: false,
  },
];

const Menus: React.FC<{ menu: MenuItem[] }> = ({ menu }) => {
  return (
    <div>
      <ul>
        {menu.map((menu, index) => {
          const menuActive = menu.isActive
            ? "bg-blue-300 bg-opacity-30 px-3 border border-blue-300 text-blue-800 py-2 flex"
            : "px-3 py-2 flex";
          const textActive = menu.isActive ? "text-blue-800" : "text-gray";
          return (
            <li key={index} className={'${menuActive} cursor-pointer'}>
              <NavLink href={menu.link} className="flex">
                {menu.icon}
                <div
                  className={'ml-2 ${textActive} hidden sm_block mx-5'}
                ></div>
                {menu.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="App">
      <section className="w-64 bg-teal-400	 h-screen">
        <div className="border-b p-5">Coffee Shop</div>
        <div className="border-b p-5">
          <Menus menu={menu1} />
        </div>
      </section>
    </div>
  );
};

export default MainHeader;