import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';

const Purchase = () => {
    const { purchaseId } = useParams();

    const [product, setProduct] = useState([]);

    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();

    const { _id, name, image, description, minimum_quantity, available_quantity, price } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${purchaseId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);


    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='shadow-2xl bg-white relative'>
                        <img src={image} className="max-w-sm rounded-lg " alt='' />
                        <div className='absolute top-[0]'>
                            <p className='bg-primary p-2 text-white font-bold'><small>Available Quantity: {available_quantity}</small></p>
                        </div>
                    </div>
                    <div className='lg:w-80 px-10'>
                        <h1 className="text-xl font-bold">{description}</h1>
                        <p className="text-primary py-3">{name}</p>
                        <p><span className='font-bold text-2xl text-accent'>$ {price}</span> <span>/ pis</span></p>


                    </div>
                    <div className='mt-6'>
                        <div class="antialiased bg-gray-200 text-gray-900 font-sans">
                            <div class="flex items-center h-screen w-full">
                                <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                                    <span class="block w-full text-xl uppercase font-bold mb-4">Order</span>
                                    <form class="mb-4" action="/" method="post">
                                        <div class="mb-4 md:w-full">
                                            <label for="name" class="block text-xs mb-1">Name</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="name" id="name" placeholder="ex: Nahiduzzaman" />
                                        </div>
                                        <div class="mb-4 md:w-full">
                                            <label for="email" class="block text-xs mb-1">Email</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="ex: abc@gmail.com" />
                                        </div>
                                        <div class="mb-6 md:w-full">
                                            <label for="mobile" class="block text-xs mb-1">Mobile</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="mobile" id="mobile" placeholder="ex: 01774003246" />
                                        </div>
                                        <div class="mb-6 md:w-full">
                                            <label for="purchase" class="block text-xs mb-1">Purchase</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="number" name="purchase" id="purchase" placeholder="20" />
                                        </div>
                                        <button class="bg-primary hover:bg-neutral text-white uppercase text-sm font-semibold px-4 py-2 rounded">Purchase</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;