import React from 'react';
import bannerBG from '../../images/bgBanner.png';


const Banner = () => {
    return (
        <div className='pt-10'>

            <div className='my-6 min-h-screen flex align-middle justify-center '
                style={{
                    background: `url(${bannerBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="hero z-50"

                >
                    <div className="hero-content text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;' }}>
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold uppercase tracking-[.10em]">Hello there <span className='text-primary'>!</span></h1>
                            <p className="py-6">This Tools Provita Ltd. You can buy any type tools such as, manufacture cutting tools , measuring tools, dies/molds and wear-resistant tools. Has high hardness and can maintain high hardnessand red hardness at high temperature etc.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;