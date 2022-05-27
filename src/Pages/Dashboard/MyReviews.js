import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'c8427814fabb49e2e43cadc0a3b42302';

    const onSubmit = async (data) => {

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
                    const addReview = {
                        name: data.name,
                        comment: data.comment,
                        rating: data.rating,
                        image: img
                    }
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addReview)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Review Added. Thanks');
                                reset();
                            }
                            else {
                                toast.error('Again Try please');
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
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-md"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required.'
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
                            <span className="label-text font-bold">Comment</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Comment"
                            className="input input-bordered w-full max-w-md h-24"
                            {...register("comment", {
                                required: {
                                    value: true,
                                    message: 'Comment is Required.'
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
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <select {...register("rating")} class="select w-full max-w-xs">
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
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
                    <input className='btn w-full max-w-md' type="submit" value=' Add Review' />
                </form>
            </div>
        </div>
    );
};

export default MyReviews;