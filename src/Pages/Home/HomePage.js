import React from 'react';
import useProducts from '../hooks/useProducts';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Company from './Company';
import Offer from './Offer';
import ProductCard from './ProductCard';
import { GiArmoredBoomerang } from 'react-icons/gi';
import { BiMessageSquareAdd } from 'react-icons/bi';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import ReviewCollectionRow from './ReviewCollectionRow';

const HomePage = () => {
    const [products] = useProducts();
    const [reviews] = useReviews();
    return (
        <div className=''>
            <Banner></Banner>
            <Company></Company>
            <Offer></Offer>
            <div>
                <div className='text-center my-10'>
                    <h3 className='text-3xl text-primary font-bold tracking-[.20em]'>YOU CAN BUY NOW!</h3>
                    <p className='font-bold'>Don't hesitate to buy, Huh!</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10'>
                    {
                        products.slice(0, 6).map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
                <div className='flex justify-center'>

                    <Link to='/tools'>
                        <button className="btn btn-wide btn-outline btn-primary">
                            <span className='font-bold mr-5 text-xl'>More Purchase</span> <GiArmoredBoomerang className='text-3xl' />
                        </button>
                    </Link>
                </div>
            </div>
            <BussinessSummery></BussinessSummery>
            <div className='mt-10'>
                <div className='text-center font-bold'>
                    <h4 className='text-primary tracking-[.20em] text-3xl uppercase'>Reviews</h4>
                    <h1 className='text-xl uppercase'>Don't Hesitate to review</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 mt-10'>
                    {
                        reviews.slice(0, 6).map(review => <ReviewCollectionRow
                            key={review._id}
                            review={review}
                        ></ReviewCollectionRow>)
                    }
                </div>
                <div className='flex justify-center'>

                    <Link to='/reviewCollection'>
                        <button className="btn btn-wide btn-outline btn-secondary">
                            <span className='font-bold mr-5 text-xl'>More Reviews</span> <BiMessageSquareAdd className='text-3xl' />
                        </button>
                    </Link>
                </div>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;