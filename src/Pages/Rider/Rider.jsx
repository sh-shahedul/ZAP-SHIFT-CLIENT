import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Rider = () => {
const {register,handleSubmit,control} = useForm()
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    
        const  serviceCenters = useLoaderData()
        const duplicateRegions = serviceCenters.map(c=>c.region)
        const regions = [...new Set(duplicateRegions)]
        console.log(regions)
        const riderRegion =  useWatch ({ control,name:'region'})
       
        const districtsByRegion = region =>{
            const regionDistrict = serviceCenters.filter(c=>c.region === region)
            const districts = regionDistrict.map(d=>d.district)
            return districts
        }
        

      const handelRiderApplication = data =>{
        axiosSecure.post('/riders',data)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your application has been successful ! We  will reach out in  1 WEEK",
                  showConfirmButton: false,
                  timer: 2500
                })
            }
        })

         console.log(data)
      }


    return (
        <div className='w-[97%] mx-auto'>
            <h1 className='text-4xl text-primary'>Be a Rider</h1>
            
      <form onSubmit={handleSubmit(handelRiderApplication)} className='mt-12'>
       
    
     
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-12'>
          
          
          <fieldset className="fieldset">
              <h2 className='text-2xl font-semibold'>Tell us about your </h2>
              {/* name  */}
          <label className="label text-black font-bold ml-2">Your Name</label>
          <input type="text" {...register('name')} defaultValue={user?.displayName}  className=" w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Your Name" />
          {/* email  */}
          <label className="label text-black font-bold ml-2">Your Email</label>
          <input type="email" {...register('email')}  className=" w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10 " defaultValue={user?.email} placeholder="Your Email" />
          {/* select region  */}

                <fieldset className="fieldset">
                <legend className="fieldset-legend"> Region</legend>
                <select  {...register('region')} defaultValue="Pick a Region" className="select  w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300">
                  <option disabled={true}>Pick a Region</option>
                  {
                    regions.map((region,i)=> <option  key={i} value={region}>{region}</option>  )
                  }
                 
                  
                </select>
               
              </fieldset>
          
           {/* select district  */}

                <fieldset className="fieldset">
                <legend className="fieldset-legend"> Districts</legend>
                <select  {...register('district')} defaultValue="Pick a District" className="select  w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300">
                  <option disabled={true}>Pick a District</option>
                  {
                    districtsByRegion(riderRegion).map((region,i)=> <option  key={i} value={region}>{region}</option>)
                  }
                 
                  
                </select>
               
              </fieldset>

          
           {/* address  */}
          <label className="label text-black font-bold ml-2">Your Address</label>
          <input type="text" {...register('address')}  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Sender Address" />
         
        </fieldset>
        
          <fieldset className="fieldset">
             <h2 className='text-2xl font-semibold'>More Details</h2>
             {/* Driving License  */}
          <label className="label text-black font-bold ml-2">Driving License</label>
          <input type="number" {...register('license')}  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Driving License" />
           {/* NID  */}
          <label className="label text-black font-bold ml-2">NID</label>
          <input type="number" {...register('NID')}  className=" w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="NID No....." />
                  
          {/* Bike Information  */}
          <label className="label text-black font-bold ml-2">Bike Registrtion No.</label>
          <input type="number" {...register('bike')}  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Bike Registrtion No...." />
          {/* phone  */}
          <label className="label text-black font-bold ml-2"> Phone No </label>
          <input type="number" {...register('Phone')} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder=" Phone No...." />
         
          {/* Tell Us About Your Self  */}
          <label className="label text-black font-bold ml-2"> Tell Us About Your Self </label>
          <textarea type="text" {...register('about')} className=" textarea w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="  Tell Us About Your Self" />
        </fieldset>
        </div>
    
       <input type="submit" value="Apply As A Rider" className=' px-8 py-2 rounded-xl bg-primary font-bold mb-10 text-black mt-7' />
      </form>
        </div>
    );
};

export default Rider;