import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import Register from '../Auth/Register/Register';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const SendParcel = () => {
    const {register,handleSubmit,control} = useForm()
    const  serviceCenters = useLoaderData()
    console.log(serviceCenters)
    const duplicateRegions = serviceCenters.map(c=>c.region)
    const regions = [...new Set(duplicateRegions)]
    console.log(regions)
    const senderRegion =  useWatch ({ control,name:'senderRegion'})
    const reciverRegion = useWatch( {control, name:'reciverRegion'})
    const districtsByRegion = region =>{
        const regionDistrict = serviceCenters.filter(c=>c.region === region)
        const districts = regionDistrict.map(d=>d.district)
        return districts
    }
    





    const handelParcel = (data)=>{
    console.log(data)
      const isDoccoument = data.parcelType ==='document' ;
      const isSameDisstrict  =  data.senderDistrict === data.reciverDistrict;
      const parecelWeight =  parseFloat(data.parcelWeight)

      let cost = 0
      if(isDoccoument){
          cost =   isSameDisstrict ? 60 : 80
      }
      else{
         if(parecelWeight<3){
            cost = isSameDisstrict ? 110 : 150
         }
         else{
           const  minCharge =  isSameDisstrict ? 110 : 150;
           const extraWeight = parecelWeight - 3
           const  extraCharge = isSameDisstrict ?  extraWeight * 40 : extraWeight* 40 + 40
            cost = minCharge + extraCharge
            
         }
      }


     console.log(cost ,'cost')


     Swal.fire({
  title: "Agree With the Cost?",
  text: `you will be charged ${cost} TK`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take it!"
     }).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });

  }
});


    }

    return (
        <div className='p-10 bg-white rounded-lg' >
            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-10'>Send A Parcel</h1>
            <h3 className='text-xl sm:text-2xl font-semibold'>Enter your parcel details</h3>
            <hr className='mt-5 text-gray-300' />
      
      <form onSubmit={handleSubmit(handelParcel)} className='mt-12'>
         {/* parcel-type  */}
       <div className='' >
           <label className="label mr-4"><input type="radio" {...register('parcelType')} value="document" className="radio text-primary" defaultChecked/> Document</label>
           <label className="label"><input type="radio" {...register('parcelType')} value="not-document" className="radio text-primary" /> Not-Document</label>
       </div>
       {/* parcel details  */}
       <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12'>
         <fieldset className="fieldset">
          <label className="label text-black font-bold ml-2">Parcel Name</label>
          <input type="text" {...register('parcelName')}  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Parcel Name" />
        </fieldset>
         <fieldset className="fieldset">
          <label className="label text-black font-bold ml-2">Parcel Weight (Kg)</label>
          <input type="number" {...register('parcelWeight')} className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Parcel Weight" />
        </fieldset>
       </div>
         <hr className='my-5 text-gray-300' />
        {/* sender and reciver details  */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-12'>
          
            {/* sender details  */}
          <fieldset className="fieldset">
              <h2 className='text-2xl font-semibold'>Sender Details</h2>
              {/* name  */}
          <label className="label text-black font-bold ml-2">Sender Name</label>
          <input type="text" {...register('senderName')}  className=" w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Sender Name" />
          {/* email  */}
          <label className="label text-black font-bold ml-2">Sender Email</label>
          <input type="email" {...register('senderEmail')}  className=" w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Sender Email" />
          {/* select region  */}

                <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select  {...register('senderRegion')} defaultValue="Pick a Region" className="select  w-full rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300">
                  <option disabled={true}>Pick a Region</option>
                  {
                    regions.map((region,i)=> <option  key={i} value={region}>{region}</option>  )
                  }
                 
                  
                </select>
               
              </fieldset>
          
           {/* select district  */}

                <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select  {...register('senderDistrict')} defaultValue="Pick a District" className="select  w-full rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300">
                  <option disabled={true}>Pick a District</option>
                  {
                    districtsByRegion(senderRegion).map((region,i)=> <option  key={i} value={region}>{region}</option>)
                  }
                 
                  
                </select>
               
              </fieldset>

          
           {/* address  */}
          <label className="label text-black font-bold ml-2">Sender Address</label>
          <input type="text" {...register('senderAddress')}  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Sender Address" />
          {/* phone  */}
          <label className="label text-black font-bold ml-2">Sender Phone No </label>
          <input type="number" {...register('senderPhoneNo')} className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Sender Phone No" />
         
          {/* pickup inst.  */}
          <label className="label text-black font-bold ml-2">Pickup Instruction </label>
          <textarea type="text" {...register('pickup-Instraction')} className=" textarea w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="  Pickup Instruction" />
        </fieldset>
            {/* reciver details  */}
            
            {/* sender details  */}
          <fieldset className="fieldset">
             <h2 className='text-2xl font-semibold'>Reciver Details</h2>
             {/* name  */}
          <label className="label text-black font-bold ml-2">Reciver Name</label>
          <input type="text" {...register('reciverName')}  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Reciver Name" />
           {/* email  */}
          <label className="label text-black font-bold ml-2">Reciver Email</label>
          <input type="email" {...register('reciverEmail')}  className=" w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Reciver Email" />
            
               {/* select region  */}

                <fieldset className="fieldset">
                <legend className="fieldset-legend">Reciver Region</legend>
                <select  {...register('reciverRegion')} defaultValue="Pick a Region" className="select  w-full rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300">
                  <option disabled={true}>Pick a Region</option>
                  {
                    regions.map((region,i)=> <option  key={i} value={region}>{region}</option>)
                  }
                 
                  
                </select>
               
              </fieldset>
          
           {/* select district  */}

                <fieldset className="fieldset">
                <legend className="fieldset-legend">Reciver Districts</legend>
                <select  {...register('reciverDistrict')} defaultValue="Pick a District" className="select  w-full rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300">
                  <option disabled={true}>Pick a District</option>
                  {
                    districtsByRegion(reciverRegion).map((region,i)=> <option  key={i} value={region}>{region}</option>)
                  }
                 
                  
                </select>
               
              </fieldset>
          {/* address  */}
          <label className="label text-black font-bold ml-2">Reciver Address</label>
          <input type="text" {...register('reciverAddress')}  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Reciver Address" />
          {/* phone  */}
          <label className="label text-black font-bold ml-2">Reciver Phone No </label>
          <input type="number" {...register('reciverPhoneNo')} className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="Reciver Phone No" />
         
          {/* delever inst  */}
          <label className="label text-black font-bold ml-2">Delivery Instruction </label>
          <textarea type="text" {...register('delivery-Instraction')} className=" textarea w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300 pr-10" placeholder="  Delivery Instruction" />
        </fieldset>
        </div>
        <h3 className=' text-lg font-bold mt-7'> * PickUp Time-4pm-7pm  Approx.</h3>
       <input type="submit" value="Proceed to Confirm Booking" className='btn btn-primary px-10 text-black mt-7' />
      </form>

        </div>
    );
};

export default SendParcel;