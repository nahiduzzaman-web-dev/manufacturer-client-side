import React from 'react';
import useReviews from '../hooks/useReviews';
import ReviewCollectionRow from './ReviewCollectionRow';
import Footer from '../Shared/Footer';

const ReviewCollection = () => {
    const [reviews] = useReviews();

    return (
        <div className='pt-20 '>
            <div className='mx-20'>
                <div className='text-center font-bold'>
                    <h4 className='text-primary tracking-[.20em] text-3xl uppercase'>Reviews</h4>
                    <h1 className='text-xl uppercase'>Don't Hesitate to review</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 mt-10'>
                    {
                        reviews.map(review => <ReviewCollectionRow
                            key={review._id}
                            review={review}
                        ></ReviewCollectionRow>)
                    }
                </div>
            </div>
            <div className='mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ReviewCollection;