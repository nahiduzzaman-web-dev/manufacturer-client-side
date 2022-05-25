import React from 'react';
import { Link } from 'react-router-dom';
import bannerBG from '../../images/bannerBG.jpg';



const Banner = () => {

    return (
        <div className='pt-10'>
            <div>
                <div class="carousel carousel-end pt-6">
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2016/09/01/15/18/industrial-1636390_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2018/01/17/06/21/electrician-3087536_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2019/12/01/18/04/hairdresser-4666064_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2021/01/06/10/15/woman-5893942_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2018/01/20/08/01/craftsmen-3094035_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2018/03/30/18/53/carpenter-3276186_960_720.jpg" alt="Drink" style={{ width: '400px' }} />
                    </div>
                </div>
                <div class="hero bg-base-200 p-10">

                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <img src={bannerBG} class="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                        </div>
                        <div className='' style={{ width: '40%' }}>
                            <h1 className="text-5xl font-bold uppercase tracking-[.10em]">Hello there <span className='text-primary'>!</span></h1>
                            <p className="py-6">This Tools Provita Ltd. You can buy any type tools such as, manufacture cutting tools , measuring tools, dies/molds and wear-resistant tools. Has high hardness and can maintain high hardnessand red hardness at high temperature etc.</p>
                            <Link to='/tools'><button className="btn btn-primary">Purchase Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;