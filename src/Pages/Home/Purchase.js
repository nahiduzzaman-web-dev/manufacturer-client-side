import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';

const Purchase = () => {

    const { purchaseId } = useParams();

    // const [product, setProduct] = useState([]);

    const [user, loading] = useAuthState(auth);
    // const { productId } = useParams();
    // const { _id, name, image, description, minimum_quantity, available_quantity, price } = product;



    const { data: product, isLoading, refetch } = useQuery([purchaseId], () => fetch(`http://localhost:5000/tool/${purchaseId}`).then(res => res.json()))

    // useEffect(() => {
    //     fetch(`http://localhost:5000/tool/${purchaseId}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProduct(data);
    //         });
    // }, []);


    if (loading || isLoading) {
        return <Loading></Loading>;
    }

    const handlePurchase = e => {
        e.preventDefault();
        const purchase = {
            orderId: product._id,
            product: product.name,
            productImg: product.image,
            price: product.price,
            orderUser: user.displayName,
            orderEmail: user.email,
            address: e.target.address.value,
            mobile: e.target.mobile.value,
            orderQuantity: e.target.orderQuantity.value,
        }
        console.log(purchase);
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('Purchase Successfull, Yeah!!');

                e.target.reset();


            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='shadow-2xl bg-white relative'>
                        <img src={product.image} className="max-w-sm rounded-lg " alt='' />
                        <div className='absolute top-[0]'>
                            <p className='bg-primary p-2 text-white font-bold'><small>Available Quantity: {product.available_quantity}</small></p>
                        </div>
                    </div>
                    <div className='lg:w-80 px-10'>
                        <h1 className="text-xl font-bold">{product.description}</h1>
                        <p className="text-primary py-3">{product.name}</p>
                        <p><span className='font-bold text-2xl text-accent'>$ {product.price}</span> <span className='text-base-400'>/ unit</span></p>


                    </div>
                    <div className='mt-6'>
                        <div class="antialiased bg-gray-200 text-gray-900 font-sans">
                            <div class="flex items-center h-screen w-full">
                                <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                                    <span class="block w-full text-xl uppercase font-bold mb-4">Order</span>
                                    <form onSubmit={handlePurchase} class="mb-4">
                                        <div class="mb-4 md:w-full">
                                            <label htmlFor="name" class="block text-xs mb-1">Name</label>
                                            <input value={user?.displayName || ''} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="name" id="name" required readOnly disabled />
                                        </div>
                                        <div class="mb-4 md:w-full">
                                            <label htmlFor="email" class="block text-xs mb-1">Email</label>
                                            <input value={user?.email || ''} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" required readOnly disabled />
                                        </div>
                                        <div class="mb-4 md:w-full">
                                            <label htmlFor="address" class="block text-xs mb-1">Address</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="address" id="address" placeholder="ex: R-10, H-12, F-6/a, Mirpur-2" required />
                                        </div>
                                        <div class="mb-6 md:w-full">
                                            <label htmlFor="mobile" class="block text-xs mb-1">Mobile</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="mobile" id="mobile" placeholder="ex: 01774003246" required />
                                        </div>
                                        <div class="mb-6 md:w-full">
                                            <label htmlFor="orderQuantity" class="block text-xs mb-1">Purchase (quantity)</label>
                                            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="number" name="orderQuantity" id="orderQuantity" placeholder="20" required />
                                        </div>
                                        <button class="bg-primary hover:bg-neutral text-white uppercase text-sm font-semibold px-4 py-2 rounded">Purchase</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Purchase;