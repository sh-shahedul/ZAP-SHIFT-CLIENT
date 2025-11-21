import React from 'react';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { MdOutlineArrowOutward } from 'react-icons/md';

const Banner = () => {
    return (
         <Carousel 
         autoPlay={true}
         infiniteLoop={true}
         showThumbs={false}
         showStatus={false}
         
         >
        
                <div className='relative'>
                    <img src={banner1} className="w-full h-auto"/>
                    <button className='btn rounded-full absolute bottom-20 left-20 bg-primary flex items-center gap-1 font-bold'>Track Your Parcel <span><MdOutlineArrowOutward /></span></button>
                    <button className='btn rounded-full absolute bottom-20 left-65 flex items-center gap-1 '>Be A Rider <span><MdOutlineArrowOutward /></span></button>

                   
                </div>
                <div className='relative'>
                    <img src={banner2} />
                     <button className='btn rounded-full absolute bottom-20 left-20 bg-primary flex items-center gap-1 font-bold'>Track Your Parcel <span><MdOutlineArrowOutward /></span></button>
                     <button className='btn rounded-full absolute bottom-20 left-65 flex items-center gap-1 '>Be A Rider <span><MdOutlineArrowOutward /></span></button>
                   
                </div>
                <div className='relative'>
                    <img src={banner3} />
                     <bu tton className='btn rounded-full absolute bottom-20 left-20 bg-primary flex items-center gap-1 font-bold'>Track Your Parcel <span><MdOutlineArrowOutward /></span></bu>
                    <button className='btn rounded-full absolute bottom-20 left-65 flex items-center gap-1 '>Be A Rider <span><MdOutlineArrowOutward /></span></button>
                    
                </div>
            </Carousel>
    );
};

export default Banner;