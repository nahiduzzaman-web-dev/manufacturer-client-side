import React from 'react';
import offerImg from '../../images/offer.jpg';
import offerBgImg from '../../images/offerBG.jpg';
import Countdown from './Countdown';

const Offer = () => {

    return (
        <div
            style={{
                background: `url(${offerBgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Countdown></Countdown>
                        <h1 className="text-5xl font-bold uppercase tracking-[.10em]">SubsCribe now!</h1>
                        <p className="py-6">You might also choose to use promotional text messaging for particular sales or discounts on offer. Research shows that customers are more likely to make a purchase when offered a deal. In fact, 67 percent of consumers admitted to making a purchase they hadn’t been planning to make because they got a deal or discount. Here are some examples of promotional text messages you might use for your business.</p>
                        <button className="btn btn-accent">Subscribe Here</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl">
                        <div className="">
                            <img src={offerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;