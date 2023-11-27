import React, { ReactElement } from 'react'
import {
HomeModernIcon,
ChartPieIcon,
BellAlertIcon
}from '@heroicons/react/20/solid';

type MenuItem={
  name: string;
  icon : ReactElement | null;
  link : string;
  isActive: boolean;
};  

const menu1 : MenuItem[]=[
  {
  name : "Home",
  icon: <HomeModernIcon width={18} className='text-gray-800' />,
  link : '/',
  isActive:false,
  },
];

const Menus : React.FC<{menu : MenuItem[]}> = ({menu}) => {
  return(
    <div>
      <ul>
        {menu.map((menu,index)=>{ //Correct map function syntax
        return (
          <li key={index} className='px-3 py-2 flex'>
            {menu.name}
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
        <section className='w-64 bg-slate-100 h-screen'>
          <div className='border-b p-5'>
          Cafe Coffee
          </div>
       
       <div className='p-5 border-b text-sm'>
        <h6>Coffe shop</h6>
      
          <li className='px-3 flex'>Dashboard</li>
          <Menus menu={menu1}/>
      
       </div>
      
      </section>
    </div>
  
  )
}



export default MainHeader