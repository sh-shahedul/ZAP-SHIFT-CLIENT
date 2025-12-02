import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEye, FaSquareCheck, FaSquareXmark } from "react-icons/fa6";
import { MdCancelPresentation } from 'react-icons/md';
import { RiDeleteBinFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
 const axiosSecure = useAxiosSecure()
 const modalRef = useRef(null)
 const [selectedRider, setSelectedRider] = useState(null);
    const {refetch,data: riders = []}=useQuery({
        queryKey:['riders','pending'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/riders')
            return res.data
        }

    })

   const updateRiderStatus = (rider,status)=>{
            const updateStatus = {status:status ,email:rider.email}
      axiosSecure.patch(`/riders/${rider._id}`,updateStatus)
      .then(res=>{
        refetch()
       if(res.data.modifiedCount > 0) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `Rider has been ${status} `,
    showConfirmButton: false,
    timer: 2500
  });
}
      })
   }


   const handelApproval =(rider)=>{
        updateRiderStatus(rider,'Approved')
   }
   const handelRejected =(rider)=>{
      updateRiderStatus(rider,'Rejected')
   }

  //  alada alada 
//    const handelApproval =(rider)=>{
//       const updateStatus = {status:'Approved'}
//       axiosSecure.patch(`/riders/${rider._id}`,updateStatus)
//       .then(res=>{
//         refetch()
//        if(res.data.modifiedCount > 0) {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Rider has been Approved",
//     showConfirmButton: false,
//     timer: 2500
//   });
// }
//       })
//    }
//    const handelRejected =(rider)=>{
//       const updateStatus = {status:'Rejected'}
//       axiosSecure.patch(`/riders/${rider._id}`,updateStatus)
//       .then(res=>{
//         refetch()
//        if(res.data.modifiedCount > 0) {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Rider has been Rejected",
//     showConfirmButton: false,
//     timer: 2500
//   });
// }
//       })
//    }
const handelDelete = rider=>{
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

      axiosSecure.delete(`/riders/${rider._id}`)
    .then(res=>{
      refetch()
      if(res.data.deletedCount){
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
      }
    })


    
   
  }
});
 
   
}

 const handelModalOpen =(rider)=>{
       setSelectedRider(rider)
      modalRef.current.showModal()
 }



    return (
        <div>
             <h1 className='text-4xl text-center font-bold p-10'>Riders Panding Approval : {riders.length}</h1>


             <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SI.</th>
        <th>Name</th>
        <th>Email</th>
        <th>District</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     {
        riders.map((rider,index)=><tr key={rider._id}>
        <th>{index+1}</th>
        <td>{rider.name}</td>
        <td>{rider.email}</td>
        <td>{rider.district}</td>
        <td>
            <p className={`${rider.status==='Approved' ? 'text-green-700':'text-red-600'}`}>{rider.status}</p>
        </td>
        <td>
            <button onClick={()=>handelModalOpen(rider)} className='text-green-600 mr-2' title='Accpect'><FaEye size={22} /></button>
            <button onClick={()=>handelApproval(rider)} className='text-green-600' title='Accpect'><FaSquareCheck size={22} /></button>
            <button onClick={()=>handelRejected(rider)} className='text-red-400 mx-2'  title='Reject'><FaSquareXmark  size={22}/></button>
            <button onClick={()=>handelDelete(rider)} className='text-red-600'  title='Delete'><RiDeleteBinFill size={22} /></button>
        </td>
        
      </tr>)
     }
      
     
    </tbody>
  </table>
</div>

{selectedRider && (
  <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
    <div className="modal-box w-11/12 max-w-lg">
      <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Rider Details</h3>

      {/* Personal Info */}
      <div className="mb-4 p-3 bg-gray-100 rounded-lg shadow-sm">
        <h4 className="font-semibold text-lg mb-2 text-gray-700">Personal Info</h4>
        <p><b>Name:</b> {selectedRider.name}</p>
        <p><b>Email:</b> {selectedRider.email}</p>
        <p><b>Phone:</b> {selectedRider.Phone}</p>
        <p><b>About:</b> {selectedRider.about}</p>
        
      </div>

      {/* Address Info */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg shadow-sm">
        <h4 className="font-semibold text-lg mb-2 text-gray-700">Address Info</h4>
        <p><b>Region:</b> {selectedRider.region}</p>
        <p><b>District:</b> {selectedRider.district}</p>
        <p><b>Address:</b> {selectedRider.address}</p>
      </div>

      {/* Vehicle Info */}
      <div className="mb-4 p-3 bg-gray-100 rounded-lg shadow-sm">
        <h4 className="font-semibold text-lg mb-2 text-gray-700">Vehicle Info</h4>
        <p><b>License:</b> {selectedRider.license}</p>
        <p><b>Bike:</b> {selectedRider.bike}</p>
      </div>

      {/* ID Info */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg shadow-sm">
        <h4 className="font-semibold text-lg mb-2 text-gray-700">ID Info</h4>
        <p><b>NID:</b> {selectedRider.NID}</p>
        <p><b>ID:</b> {selectedRider._id}</p>
        <p><b>Created At:</b> {new Date(selectedRider.createdAt).toLocaleString()}</p>
      </div>

      {/* Close Button */}
      <div className="modal-action">
        <form method="dialog" className="w-full">
          <button   className="btn btn-primary w-full" >
            Close
          </button>
        </form>
      </div>
    </div>
  </dialog>
)}


   </div>
    );
};

export default ApproveRiders;