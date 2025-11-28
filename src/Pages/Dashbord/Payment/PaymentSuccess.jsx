import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
     const [searchParams] = useSearchParams();
     const[paymentInfo ,setPaymentInfo] = useState({})
     const sessionId = searchParams.get('session_id')
     const axiosSecure = useAxiosSecure()
     console.log(sessionId);

       useEffect(()=>{
          axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
          .then(res=>{
            console.log(res.data);
            setPaymentInfo({
              transitionId:res.data.transitionId,
              trakingId: res.data.trakingId
            })
          })

       },[sessionId,axiosSecure])
    return (
        <div>
            <h1> payment successful </h1>
            <p>trakingId {paymentInfo.trakingId}</p>
            <p>transitionId {paymentInfo.transitionId}</p>
        </div>
    );
};

export default PaymentSuccess;