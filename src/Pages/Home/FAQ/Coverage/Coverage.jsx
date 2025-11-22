import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
      

    const position = [23.6850, 90.3563]
    const serviceCenters = useLoaderData()
    const  mapRef = useRef()
    // console.log(serviceCenters);
    const handelSerch = e =>{
        e.preventDefault();
        const location = e.target.location.value;
         const district  = serviceCenters.find(center=>center.district.toLowerCase().includes(location.toLowerCase()));
         if(district){
            const coordinate =[district.latitude , district.longitude]
            console.log(district,coordinate)
            mapRef.current.flyTo(coordinate,14)

         }
      }

    return (
        <div >
           <h2 className='text-5xl font-bold text-secondary'>We are available in 64 districts</h2>

              <div>
                <form onSubmit={handelSerch}>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className='rounded-full'  name='location' type="search" required placeholder="Search" />
</label>

  </form>
              </div>

           <div className=' border w-full h-[800px]'>
            <MapContainer
            ref={mapRef}
             center={position}
              zoom={8}
             scrollWheelZoom={false}
             className='h-[800px]'
             >
          <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>



               {
                serviceCenters.map(center=>
                 <Marker position={[center.latitude, center.longitude]}>
                        <Popup>
                         <strong>{center.district}</strong> <br /> Services Area : {center.covered_area.join(', ')}
                      </Popup>
                </Marker>
              )
               }
        
  </MapContainer>


           </div>
        </div>
    );
};

export default Coverage;