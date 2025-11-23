import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiEyeFill } from 'react-icons/pi';
import { TbEyeClosed } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router'; 
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogIn/SocialLogin';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPass, setShowPass] = useState(false);
   const location = useLocation()
   console.log(location,'in register')
   const navigate = useNavigate()

   const {registerUser,updateUserProfile} = useAuth()
     

  const handelRegistration = (data) => {
    console.log(data.photo[0], 'after regiseter');
    const profileImg = data.photo[0]
    registerUser(data.email,data.password)
    .then(result=>{
        console.log(result.user)
          const formData = new FormData()
     formData.append('image',profileImg)

   const image_Api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`
   axios.post(image_Api_url,formData)
   .then(res=>{
      console.log('after image upload',res.data.data.url);
      const userProfile = {
       displayName : data.name,
       photoURL : res.data.data.url
      }
      updateUserProfile(userProfile)
      .then(res=>{
        console.log(res.user)
      })
      .catch(error =>{
        console.log(error)
      })
   })
    })
    .catch(error=>{
        console.log(error)
    })
   
   


  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-100">
        <div  className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <form 
        onSubmit={handleSubmit(handelRegistration)} 
       
      >
        <h2 className="md:text-4xl sm:3xl text-2xl font-bold ">Create an Account</h2>
        <p className='md:text-lg font-medium mb-5'>Register with ZapShift</p>
        
        {/* NAME FIELD */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register('name', { required: true, minLength: 3 })}
            className="w-full p-2  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300"
            placeholder="Your Name"
          />
          {errors.name?.type === 'required' && <p className="text-red-600 text-sm mt-1">Name is Required</p>}
          {errors.name?.type === 'minLength' && <p className="text-red-600 text-sm mt-1">Name must be at least 3 characters</p>}
        </div>
        {/* Photo  */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Photo</label>
          
          <input
            type="file"
            {...register('photo', { required: true })}
            className=" file-input w-full   border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300"
            placeholder="Your Name"
          />
          {errors.photo?.type === 'required' && <p className="text-red-600 text-sm mt-1">Photo is Required</p>}
          
        </div>


        {/* EMAIL FIELD */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full p-2  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && <p className="text-red-600 text-sm mt-1">Email is Required</p>}
        </div>

        {/* PASSWORD FIELD */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              {...register('password', {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])/
              })}
              className="w-full p-2  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10"
              placeholder="Password"
            />
            {/* toggle show pass */}
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3.5 cursor-pointer text-gray-600"
            >
              {showPass ?  <TbEyeClosed /> : <PiEyeFill /> }
            </span>
          </div>
          {errors.password?.type === 'required' && <p className="text-red-600 text-sm mt-1">Password is Required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm mt-1">Password must be at least 6 characters</p>}
          {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm mt-1">Password must contain at least one uppercase, one lowercase, and one special character.</p>}
        </div>

        {/* CHECKBOX */}
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            {...register("check", { required: true })}
            className="w-4 h-4 accent-lime-300"
          />
          <label className="text-sm">I agree to the terms & conditions</label>
        </div>
        {errors.check && <p className="text-red-600 text-sm mt-1">You must agree before registering.</p>}

        {/* REGISTER BUTTON */}
        <button className="w-full py-2 bg-lime-300 text-black font-bold rounded-full hover:bg-lime-400 transition-colors">
          Register
        </button>

        {/* LOGIN LINK */}
        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <Link state={location.state} to='/login' className="text-lime-500 font-bold hover:underline">
            Login
          </Link>
        </p>

      
      </form>
      <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;


