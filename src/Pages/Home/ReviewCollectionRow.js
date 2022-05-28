import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';


const ReviewCollectionRow = ({ review }) => {
    const { name, comment, rating, image } = review;
    return (
        <div className='relative'>

            <div className="wrappe antialiased text-gray-900">
                <div>

                    <div className='flex justify-center'>
                        <div className="avatar  flex justify-center object-cover object-center rounded-lg" style={{ width: '250px', height: '250px' }}>
                            <div className="w-full mask mask-hexagon " style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
                                <img src={image} alt='' />
                            </div>
                        </div>
                    </div>

                    <div className="relative px-4 -mt-16  ">
                        <div className="bg-white p-6 rounded-lg "
                            style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px' }}>
                            <div className="flex justify-around items-baseline">
                                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    New
                                </span>
                                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                    Review
                                </div>
                                <div>
                                    {
                                        rating && <p className='flex text-primary text-2xl font-bold'> {rating} <AiFillStar /></p>
                                    }
                                </div>
                            </div>

                            <div className="mt-5 text-justify">
                                <p><FaQuoteLeft className='text-secondary text-2xl' /> <span className='ml-6'>{comment}</span></p>
                            </div>
                            <div className='flex justify-end'>
                                <h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate text-end">{name}</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCollectionRow;