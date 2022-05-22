import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Company from './Company';
import Offer from './Offer';

const HomePage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Company></Company>
            <Offer></Offer>
            <BussinessSummery></BussinessSummery>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;