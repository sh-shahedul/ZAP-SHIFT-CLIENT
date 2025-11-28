import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
             <h1> payment cancel please tru again </h1>
             <Link className='btn btn-primary text-black' to='/dashbord/my-parcels'> Try Again</Link>
        </div>
    );
};

export default PaymentCancel;