import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogIn/SocialLogin';

const Login = () => {
    const {register, handleSubmit,formState:{errors}} = useForm()
   const {signInUser}=useAuth()
     const navigate = useNavigate()
   const location = useLocation()
   console.log('in the log in page',location)



    const handelLogIn = (data)=>{
       console.log(data)
       signInUser(data.email,data.password)
       .then(result =>{
        console.log(result.user)
         navigate(location.state|| '/')
       })
       .catch(error=>{
        console.log(error)
       })
    }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        {/* Your original code unchanged */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handelLogIn)}>
                 <h2 className="md:text-4xl sm:3xl text-2xl font-bold ">Welcome Back</h2>
               <p className='md:text-lg font-medium mb-5'>Login with ZapShift</p>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input 
                  type="email"  
                  {...register('email',{required:true})} 
                  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" 
                  placeholder="Email" 
                />
                {errors.email?.type==='required' && <p className='text-red-600'>Email is required</p>}

                <label className="label">Password</label>
                <input 
                  type="password" 
                  {...register('password',{required:true ,minLength:6})}  
                  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" 
                  placeholder="Password" 
                />
                {errors.password?.type==='required' && <p className='text-red-600'>Password is required</p>}
                {errors.password?.type==='minLength' && <p className='text-red-600'>Password Must have Six char.</p>}

                <div><a className="link link-hover">Forgot password?</a></div>

                <button className="w-full py-2 bg-lime-300 text-black font-bold rounded-full hover:bg-lime-400 transition-colors">
                  Log In
                </button>
              </fieldset>
            </form>

            <p className=" font-medium text-gray-600 text-sm">
              New to Zap shift?{" "}
              <Link state={location.state} to='/register' className="text-lime-500 font-bold hover:underline">
                Register
              </Link>
            </p>

              <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;
