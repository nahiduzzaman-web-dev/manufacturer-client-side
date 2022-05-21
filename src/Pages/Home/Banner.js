import React from 'react';
import bImg1 from '../../images/banner-1.jpg';
import bImg2 from '../../images/banner-2.jpg';
import bImg3 from '../../images/banner-3.jpg';
import bImg4 from '../../images/banner-4.jpg';

const Banner = () => {
    return (
        <div className='pt-10'>
            <div>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src={bImg1} class="w-full" alt='' />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={bImg2} class="w-full" alt='' />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src={bImg3} class="w-full" alt='' />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src={bImg4} class="w-full" alt='' />
                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
                </div>
            </div>

            <div>
                <div class="hero">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Hello there <span className='text-primary'>!</span></h1>
                            <p class="py-6">This Tools Provita Ltd. You can buy any type tools such as, manufacture cutting tools , measuring tools, dies/molds and wear-resistant tools. Has high hardness and can maintain high hardnessand red hardness at high temperature etc.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;