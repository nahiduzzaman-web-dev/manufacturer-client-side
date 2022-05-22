import React from 'react';
import boschImg from '../../images/bosch.png';
import positecImg from '../../images/positec.jpg';
import sandvicImg from '../../images/sandvic.png';
import snaponImg from '../../images/snap-on.jpg';

const Company = () => {
    return (
        <div className='mx-10 '>
            <div className="stats w-full shadow-xl my-10 stats-vertical lg:stats-horizontal">

                <div className="stat place-items-center">
                    <div className="flex justify-center">
                        <img src={boschImg} alt="" className='w-50' />
                    </div>
                    <div className="stat-title">Headquarters</div>
                    <div className="text-primary text-2xl">Germany</div>
                    <div className="stat-desc">Bosch, Dremel, Rotozip</div>
                </div>
                <div className="stat place-items-center">
                    <div className="flex justify-center">
                        <img src={positecImg} alt="" className='w-50' />
                    </div>
                    <div className="stat-title">Headquarters</div>
                    <div className="text-primary text-2xl">Suzhou, China</div>
                    <div className="stat-desc">WORX, Rockwell Tools, Erbauer, Bauker</div>
                </div>
                <div className="stat place-items-center">
                    <div className="flex justify-center">
                        <img src={sandvicImg} alt="" className='w-50' />
                    </div>
                    <div className="stat-title">Headquarters</div>
                    <div className="text-primary text-2xl">Sweden</div>
                    <div className="stat-desc">Sandvik</div>
                </div>
                <div className="stat place-items-center">
                    <div className="flex justify-center">
                        <img src={snaponImg} alt="" className='w-50' />
                    </div>
                    <div className="stat-title">Headquarters</div>
                    <div className="text-primary text-2xl">Wisconsin, US</div>
                    <div className="stat-desc">Snap-on, Bahco, Blue-Point, <br />  Williams,
                        CDI Torque Products, <br />
                        Sun diagnostic tools</div>
                </div>




            </div>
        </div>
    );
};

export default Company;