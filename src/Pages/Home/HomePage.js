import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Offer from './Offer';

const HomePage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;