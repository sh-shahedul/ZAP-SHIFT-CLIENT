import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Component/Loading/Loading';

const Payment = () => {
  const  {parcelId} = useParams()
  const axiosSecure = useAxiosSecure()
  const {isLoading,data:parcel} =useQuery({
    queryKey :['parcels',parcelId],
    queryFn: async ()=>{
       const res = await axiosSecure.get(`/parcels/${parcelId}`)
       console.log(res.data);
       return res.data
    }
  })
    // const {parcelName}= parcel || {}

     const handelPayment = async ()=>{
           const paymentInfo = {
              cost:parcel.cost,
              parcelName:parcel.parcelName,
              parcelId: parcel._id,
              senderEmail:parcel.senderEmail,

           }
           console.log(paymentInfo);
           
      const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
       console.log(res.data);
       window.location.href = res.data.url
      
   
     }




    if(isLoading) return <Loading></Loading>
    return (
        <div>
              <h1> Please pay {parcel.cost} first :{parcel.parcelName} </h1>
              <button onClick={handelPayment} className=' btn btn-primary text-black'> pay </button>
        </div>
    );
};

export default Payment;