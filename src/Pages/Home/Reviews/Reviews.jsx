import React, { use } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import ReviewCard from './ReviewCard';
import reviewImg from '../../../assets/customer-top.png'
const Reviews = ({reviewsPromies}) => {
    const reviews = use(reviewsPromies)
    console.log(reviews)
    return (
        <div className='my-10'>
         <figure className=' flex justify-center mb-5'>
            <img className=' w-[300px]' src={reviewImg} alt="" />
         </figure>
        <h1 className='md:text-4xl sm:text-3xl text-2xl text-center font-bold text-secondary'> What our customers are sayings </h1>
        <p className='text-center max-w-[830px] mx-auto mt-2 mb-7 font-medium'> Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
          
        }}
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper"
      >

            {
                 reviews.map(review=> <SwiperSlide key={review.id}> <ReviewCard review={review}></ReviewCard> </SwiperSlide>)
            }

      
       
      </Swiper>
    </div>
    );
};

export default Reviews;