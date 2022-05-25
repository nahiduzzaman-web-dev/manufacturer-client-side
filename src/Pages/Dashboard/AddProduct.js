import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'c8427814fabb49e2e43cadc0a3b42302';

    const onSubmit = async (data) => {
        console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const addProduct = {
                        name: data.productName,
                        description: data.description,
                        available_quantity: data.aveQuantity,
                        minimum_quantity: data.minQuantity,
                        price: data.price,
                        image: img
                    }
                    console.log('add product', addProduct);

                    fetch('http://localhost:5000/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product Added Successfully.');
                                reset();
                            }
                            else {
                                toast.error('Failed add your product');
                            }
                        })
                }

            })
    }
    return (
        <div className='mx-20'>
            <div className='mt-10'>
                <h3 className='text-xl text-center text-secondary'>Do you want to add new product ?</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='shadow-2xl p-5 md:pl-20 w-full'>
                    <div className="form-control w-full max-w-md ">
                        <label className="label">
                            <span className="label-text font-bold">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-md"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: 'product Name is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Product Description"
                            className="input input-bordered w-full max-w-md h-24"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'product Description is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Available Quantity"
                            className="input input-bordered w-full max-w-md"
                            {...register("aveQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text font-bold">Minimum Quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Minimum Quantity"
                            className="input input-bordered w-full max-w-md"
                            {...register("minQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="price"
                            className="input input-bordered w-full max-w-md"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-md"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-md' type="submit" value='Add Product' />
                </form>
            </div>
        </div>

    );
};

export default AddProduct;