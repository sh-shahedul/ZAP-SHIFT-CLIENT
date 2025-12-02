import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa6';
import { FiShieldOff } from "react-icons/fi";
import Swal from 'sweetalert2';
const UserManageMent = () => {
  const [serchText,setSerchText] = useState()
      const axiosSecure =  useAxiosSecure()    
    const{ refetch,data:users = []} =useQuery({
        queryKey:['users',serchText],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users?serchText=${serchText}`)
            return res.data
        }
    })

  const  handelmakeAdimn = (user)=>{
      const roleInfo = {role: 'admin'}
    axiosSecure.patch(`/users/${user._id}`,roleInfo)
    .then(res=>{
      if(res.data.modifiedCount){
        refetch()
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.displayName} MArked As Admin `,
            showConfirmButton: false,
            timer: 2000
          });
      }
    })
   }

   const  handelAdimnRemove = (user)=>{
      const roleInfo = {role: 'user'}
    axiosSecure.patch(`/users/${user._id}`,roleInfo)
    .then(res=>{
      if(res.data.modifiedCount){
        refetch()
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.displayName} Remove From Admin `,
            showConfirmButton: false,
            timer: 2000
          });
      }
    })
   }

                           

    return (
        <div>
              <h1 className='text-4xl text-center p-10'> Management User : {users.length} </h1>
                
              <label className="input">
         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
       <g
        strokeLinejoin="round"
            strokeLinecap="round"
         strokeWidth="2.5"
          fill="none"
           stroke="currentColor"
        >
           <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
     </svg>
     <input 
     onChange={(e)=>setSerchText(e.target.value)}
     type="search"
      placeholder="Search users" />
        </label>

             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SI.</th>
        <th>User</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Action</th>
        <th>Other Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index)=> <tr key={user._id}>
        <td>
          {index+1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar " />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
            </div>
          </div>
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.role}
        </td>
        <td>

            {
                user.role ==='admin' ?
                <button onClick={()=>handelAdimnRemove(user)} className='mx-2 btn btn-sm bg-red-300 hover:bg-red-600 hover:text-white'>   <FiShieldOff size={20} /></button> :
                <button
                onClick={()=> handelmakeAdimn(user)}
                className='btn btn-sm  bg-primary hover:bg-green-600 hover:text-black'>  <FaUserShield size={22} /></button> 
            }
        </td>
        <th>
         Actions
        </th>
      </tr> )
     }
      
     
    </tbody>
  
   
  </table>
</div>

        </div>
    );
};

export default UserManageMent;