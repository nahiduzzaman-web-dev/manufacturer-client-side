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
    const [qError, setQerror] = useState('');

    // const [product, setProduct] = useState([]);

    const [user, loading] = useAuthState(auth);
    // const { productId } = useParams();
    // const { _id, name, image, description, minimum_quantity, available_quantity, price } = product;



    const { data: product, isLoading, refetch } = useQuery([purchaseId], () => fetch(`https://blooming-lake-83888.herokuapp.com/tool/${purchaseId}`).then(res => res.json()))

    // useEffect(() => {
    //     fetch(`https://blooming-lake-83888.herokuapp.com/tool/${purchaseId}`)
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
        fetch('https://blooming-lake-83888.herokuapp.com/purchase', {
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
    };

    const handleQuantity = e => {
        const inputQuantity = e.target.value;
        if (inputQuantity < parseInt(product.minimum_quantity)) {
            setQerror('must be order minimum 20 units');
        }
        else if (inputQuantity > parseInt(product.available_quantity)) {
            setQerror('quantity not enough');
        }
        else {
            setQerror('');
        }
    };
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
                        <div className="antialiased bg-gray-200 text-gray-900 font-sans">
                            <div className="flex items-center h-screen w-full">
                                <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                                    <span className="block w-full text-xl uppercase font-bold mb-4">Order</span>
                                    <form onSubmit={handlePurchase} className="mb-4">
                                        <div className="mb-4 md:w-full">
                                            <label htmlFor="name" className="block text-xs mb-1">Name</label>
                                            <input value={user?.displayName || ''} className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="name" id="name" required readOnly disabled />
                                        </div>
                                        <div className="mb-4 md:w-full">
                                            <label htmlFor="email" className="block text-xs mb-1">Email</label>
                                            <input value={user?.email || ''} className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" required readOnly disabled />
                                        </div>
                                        <div className="mb-4 md:w-full">
                                            <label htmlFor="address" className="block text-xs mb-1">Address</label>
                                            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="address" id="address" placeholder="ex: R-10, H-12, F-6/a, Mirpur-2" required />
                                        </div>
                                        <div className="mb-6 md:w-full">
                                            <label htmlFor="mobile" className="block text-xs mb-1">Mobile</label>
                                            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="mobile" id="mobile" placeholder="ex: 01774003246" required />
                                        </div>
                                        <div className="mb-6 md:w-full">
                                            <label htmlFor="orderQuantity" className="block text-xs mb-1">Purchase (quantity)</label>
                                            <input onChange={handleQuantity} className="w-full border rounded p-2 outline-none focus:shadow-outline" type="number" name="orderQuantity" id="orderQuantity" placeholder="20" required />
                                            {
                                                <p className='text-red-500'><small>{qError}</small></p>
                                            }
                                        </div>

                                        {
                                            !qError && <button className="bg-primary hover:bg-neutral text-white uppercase text-sm font-semibold px-4 py-2 rounded">Purchase</button>
                                        }

                                        {
                                            qError && <button disabled className="bg-gray-300  cursor-not-allowed text-white uppercase text-sm font-semibold px-4 py-2 rounded">Purchase</button>
                                        }



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