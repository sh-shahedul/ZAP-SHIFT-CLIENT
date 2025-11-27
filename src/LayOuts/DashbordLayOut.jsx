import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from '../Component/Logo/Logo';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { RiExchangeBoxFill } from 'react-icons/ri';

const DashbordLayOut = () => {
    return (
        <div className="drawer lg:drawer-open max-w-screen-2xl mx-auto bg-base-200">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
       <RiExchangeBoxFill size={30} />
      </label>
      <div className="px-4"><Logo></Logo></div>
    </nav>
    {/* Page content here */}
    <Outlet></Outlet>
    
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
             <FaHome size={20} />
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>
        {/* dashbord link  */}
        {/* <li><NavLink to='/dashbord/my-parcels'> My Parcels </NavLink></li> */}


        {/* List item */}
        <li>
          <NavLink to='/dashbord/my-parcels' className="is-drawer-close:tooltip is-drawer-close:tooltip-right"   data-tip="parcels">
            {/* parecle icon */}
            <TbTruckDelivery size={20} />
            <span className="is-drawer-close:hidden">My Parcels</span>
          </NavLink>
        </li>
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default DashbordLayOut;