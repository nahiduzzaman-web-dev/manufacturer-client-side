import React from 'react';
import useProducts from '../hooks/useProducts';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Company from './Company';
import Offer from './Offer';
import ProductCard from './ProductCard';
import { GiArmoredBoomerang } from 'react-icons/gi';
import Contact from './Contact';

const HomePage = () => {
    const [products] = useProducts();
    return (
        <div className=''>
            <Banner></Banner>
            <Company></Company>
            <Offer></Offer>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10'>
                    {
                        products.slice(0, 3).map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
                <div className='flex justify-center'>

                    <button class="btn btn-wide btn-outline btn-primary">
                        <span className='font-bold mr-5 text-xl'>More Purchase</span> <GiArmoredBoomerang className='text-3xl' />
                    </button>
                </div>
            </div>
            <BussinessSummery></BussinessSummery>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;