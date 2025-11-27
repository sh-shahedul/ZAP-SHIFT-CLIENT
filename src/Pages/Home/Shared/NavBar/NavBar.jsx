import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../../Component/Logo/Logo';
import useAuth from '../../../../Hooks/useAuth';

const NavBar = () => {
   const{user,signOutUser} = useAuth()
    const links =<>
    
 <li><NavLink to="/" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>Services</NavLink></li>
<li><NavLink to="/covarege" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>Coverage</NavLink></li>
<li><NavLink to="/about" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>About Us</NavLink></li>
<li><NavLink to="/pricing" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>Pricing</NavLink></li>
<li><NavLink to="/sendParcel" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>Send Parcel</NavLink></li>
<li><NavLink to="/contact" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>Contact</NavLink></li>

     {
      user && <>
      <li><NavLink to="/dashbord/my-parcels" className={({isActive}) => isActive ? "bg-lime-300 text-black px-3 py-2 rounded-full" : ""}>My Parcel</NavLink></li>
      
      </>
     }
    
    </>



const handelLogOut =()=>{
     signOutUser()
     .then(result=>{
    console.log(result.user);
     })
     .then(error=>{
      console.log(error)
     })
}
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">

    {
      user?  <button onClick={handelLogOut} className="btn">Sign Out</button>:
    <Link to='/login' className="btn">Sign In</Link>
    }
   
   <Link to='/rider' className=' btn btn-primary text-black font-bold'>Be a Rider</Link>
  </div>
</div>
    );
};

export default NavBar;