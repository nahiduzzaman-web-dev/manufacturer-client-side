import React from 'react';
import { GiFlyingFlag } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { RiEmotionHappyFill } from 'react-icons/ri';
import { VscFeedback } from 'react-icons/vsc';

const BussinessSummery = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='text-3xl text-primary font-bold tracking-[.20em]'>MILLIONS BUSINESS TRUST ME</h3>
                <p className='font-bold'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">

                <div className="stat place-items-center">
                    <div className='mb-5'>
                        <GiFlyingFlag className='text-8xl text-secondary' />
                    </div>
                    <div className="stat-value text-5xl">31K</div>
                    <div className="stat-title text-secondary text-2xl font-bold">Countries</div>
                </div>

                <div className="stat place-items-center">
                    <div className='mb-5'>
                        <FaUsers className='text-8xl text-secondary' />
                    </div>
                    <div className="stat-value">575+</div>
                    <div className="stat-title  text-secondary text-2xl font-bold">New Users Daily</div>
                </div>
                <div className="stat place-items-center">
                    <div className='mb-5'>
                        <RiEmotionHappyFill className='text-8xl text-secondary' />
                    </div>
                    <div className="stat-value">4,200+</div>
                    <div className="stat-title  text-secondary text-2xl font-bold">Happy Client</div>
                </div>
                <div className="stat place-items-center">
                    <div className='mb-5'>
                        <VscFeedback className='text-8xl text-secondary' />
                    </div>
                    <div className="stat-value">5,200+</div>
                    <div className="stat-title  text-secondary text-2xl font-bold">Feedback</div>
                </div>


            </div>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl mx-10">
                    <div className='flex mx-10'>
                        <button className="btn btn-wide mr-5 bg-secondary border-0 hover:bg-sky-700 text-white">Request For Quote</button>
                        <button className="btn border-0 bg-primary text-white hover:bg-orange-400">Contact Us</button>
                    </div>
                    <div className='lg:mx-20 mx-auto'>
                        <h1 className="text-3xl font-bold text-primary">Have any question about us or get a
                            products request ?</h1>
                        <p className="font-bold text-xl my-4">Don't hesitate to contact us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinessSummery;