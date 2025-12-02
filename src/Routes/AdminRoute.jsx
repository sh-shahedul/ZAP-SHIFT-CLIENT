import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Component/Loading/Loading';
import useRole from '../Hooks/useRole';
import Forbidden from '../Component/Forbidden/Forbidden';

const AdminRoute = ({children}) => {
    const{loading} =useAuth()
    const{role,roleLoading} = useRole()

      if(loading || roleLoading){
        return <Loading></Loading>
    }

    if(role !== 'admin'){
        return   <h1 className='text-red-600 text-4xl text-center p-20'> Forbidden </h1>
    }



    return children
};

export default AdminRoute;