import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import ParcelTraking from '../Brands/ParcelTraking/ParcelTraking';
import CustomerSetisfection from '../CustomerSetisfection/CustomerSetisfection';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';

const reviewsPromies = fetch('/reviews.json')
                       .then(res=>res.json())



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWork></HowItWork>
           <OurServices></OurServices>
           <Brands></Brands>
           <ParcelTraking></ParcelTraking>
           <CustomerSetisfection></CustomerSetisfection>
           <Reviews reviewsPromies={reviewsPromies}></Reviews>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;