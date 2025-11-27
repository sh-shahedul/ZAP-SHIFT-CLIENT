import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LucideView } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
// import Swal from 'sweetalert2';




const MyParcels = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:parcels=[], refetch} =useQuery({
        queryKey:['MyParcels',user?.email],
        queryFn : async()=>{
          const  res = await axiosSecure.get(`/parcels?email=${user.email}`)
          return res.data
        }
    })



   const handelParcelDelete =id =>{
     console.log(id);
     Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    axiosSecure.delete(`/parcels/${id}`)
    .then(res=>{
      console.log(res.data);

      if(res.data.deletedCount){
           refetch()
       Swal.fire({
      title: "Deleted!",
      text: "Your parcel request has been deleted.",
      icon: "success"
    });
   }
    })
   

      
     
    
    
  }
});
     
   }

    return (
        <div>
            <h1> All of My Parcels : {parcels.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SI.</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment </th>
        <th>Delivery Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel,index)=> <tr key={parcel._id}>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>
          {
            parcel.paymentsStatus === 'paid'? <span className='text-green-400 font-bold'>paid</span> :<Link to='/payment' className='bg-primary p-2 font-semibold rounded-full'>Pay</Link>
          }
        </td>
        <td>{parcel.deliveryStatus}</td>
        <td className=''>
            <button className="btn btn-square hover:bg-primary"> <FaEdit></FaEdit></button>
            <button className="btn btn-square hover:bg-primary  mx-2"> <LucideView /></button>
            <button onClick={()=>handelParcelDelete(parcel._id)}  className="btn btn-square hover:bg-primary"> <RiDeleteBin6Line /></button>
        </td>
      </tr> )
     
       }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyParcels;