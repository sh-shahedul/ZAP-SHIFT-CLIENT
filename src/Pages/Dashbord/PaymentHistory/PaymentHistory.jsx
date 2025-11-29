import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
     const {user} = useAuth()
     const  axiosSecure = useAxiosSecure();

    const {data:payments =[]} = useQuery({
       queryKey: ['payments',user.email ],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`) 
            return res.data;
        }
    })




    return (
        <div>
            <h1 className='text-4xl py-10'>Payment History : {payments.length}</h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SI.</th>
        <th>Name</th>
        <th>Ammount</th>
        <th>Transaction ID</th>
        <th> Date & Time</th>
      </tr>
    </thead>
    <tbody>
     {
        payments.map((payment,index)=>  <tr key={payment._id}>
        <th>{index+1}</th>
        <td>Cy Ganderton</td>
        <td>${payment.ammount}</td>
        <td>{payment.transitionId}</td>
        <td>{payment.paidAt}</td>
      </tr>)
     }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;