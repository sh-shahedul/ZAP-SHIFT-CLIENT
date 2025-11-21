import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import ParcelTraking from '../Brands/ParcelTraking/ParcelTraking';
import CustomerSetisfection from '../CustomerSetisfection/CustomerSetisfection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWork></HowItWork>
           <OurServices></OurServices>
           <Brands></Brands>
           <ParcelTraking></ParcelTraking>
           <CustomerSetisfection></CustomerSetisfection>
        </div>
    );
};

export default Home;