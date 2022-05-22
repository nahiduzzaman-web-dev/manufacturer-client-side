import React from 'react';
import boschImg from '../../images/bosch.png';
import positecImg from '../../images/positec.jpg';
import sandvicImg from '../../images/sandvic.png';
import snaponImg from '../../images/snap-on.jpg';

const Company = () => {
    return (
        <div className='mx-10 '>
            <div class="stats w-full shadow-xl my-10 stats-vertical lg:stats-horizontal">

                <div class="stat place-items-center">
                    <div class="flex justify-center">
                        <img src={boschImg} alt="" className='w-50' />
                    </div>
                    <div class="stat-title">Headquarters</div>
                    <div class="text-primary text-2xl">Germany</div>
                    <div class="stat-desc">Bosch, Dremel, Rotozip</div>
                </div>
                <div class="stat place-items-center">
                    <div class="flex justify-center">
                        <img src={positecImg} alt="" className='w-50' />
                    </div>
                    <div class="stat-title">Headquarters</div>
                    <div class="text-primary text-2xl">Suzhou, China</div>
                    <div class="stat-desc">WORX, Rockwell Tools, Erbauer, Bauker</div>
                </div>
                <div class="stat place-items-center">
                    <div class="flex justify-center">
                        <img src={sandvicImg} alt="" className='w-50' />
                    </div>
                    <div class="stat-title">Headquarters</div>
                    <div class="text-primary text-2xl">Sweden</div>
                    <div class="stat-desc">Sandvik</div>
                </div>
                <div class="stat place-items-center">
                    <div class="flex justify-center">
                        <img src={snaponImg} alt="" className='w-50' />
                    </div>
                    <div class="stat-title">Headquarters</div>
                    <div class="text-primary text-2xl">Wisconsin, US</div>
                    <div class="stat-desc">Snap-on, Bahco, Blue-Point, <br />  Williams,
                        CDI Torque Products, <br />
                        Sun diagnostic tools</div>
                </div>




            </div>
        </div>
    );
};

export default Company;