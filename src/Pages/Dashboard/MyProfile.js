import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();
    const [user] = useAuthState(auth);

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
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const updateProfile = {
                        name: data.name,
                        email: data.email,
                        education: data.education,
                        mobile: data.mobile,
                        image: img
                    }
                    // fetch('http://localhost:5000/review', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json',
                    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    //     },
                    //     body: JSON.stringify(updateProfile)
                    // })
                    //     .then(res => res.json())
                    //     .then(inserted => {
                    //         if (inserted.insertedId) {
                    //             toast.success('Review Added. Thanks');
                    //             reset();
                    //         }
                    //         else {
                    //             toast.error('Again Try please');
                    //         }
                    //     })
                    console.log(updateProfile);
                }

            })
    }
    return (
        <div className='mx-20 py-10'>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>

                    </div>
                    <div className='card-body items-center text-center'>
                        <h2 class="text-xl">{user?.displayName}</h2>
                        <h2 class="text-xl">{user?.email}</h2>
                    </div>
                    <div class="card-body items-start text-center">

                        <h2 class="card-title ">Education: </h2>
                        <h2 class="card-title ">Location: </h2>
                        <h2 class="card-title ">Mobile: </h2>

                        <div>
                            <a target='_blank' rel="noopener noreferrer" href="">
                                <AiFillLinkedin className='text-xl' />
                            </a>
                        </div>

                    </div>


                    <label for="update-profile-modal" class="btn modal-button btn-block rounded-none bg-primary border-0 text-white capitalize text-xl hover:bg-sky-600">Update Profile</label>
                    <input type="checkbox" id="update-profile-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">


                            <div className='mt-10'>
                                <h3 className='text-xl text-center text-secondary mb-6'>Do you want to Update your profile ?</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className='shadow-2xl p-5 md:pl-20 w-full bg-base-300'>
                                    <div className="form-control w-full max-w-md ">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input
                                            defaultValue={user.displayName}
                                            type="text"
                                            placeholder="Name"
                                            className="input input-bordered w-full max-w-md disabled"
                                            {...register('name', {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required.'
                                                }
                                            })}
                                            readOnly
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' &&
                                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-md ">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input
                                            defaultValue={user.email}
                                            type="email"
                                            placeholder="Email"
                                            className="input input-bordered w-full max-w-md disabled"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email address is Required.'
                                                }
                                            })}
                                            readonly
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' &&
                                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-md ">
                                        <label className="label">
                                            <span className="label-text font-bold">Education</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Education"
                                            className="input input-bordered w-full max-w-md"
                                            {...register("education", {
                                                required: {
                                                    value: true,
                                                    message: 'Education is Required.'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' &&
                                                <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-md">
                                        <label className="label ">
                                            <span className="label-text font-bold">City</span>
                                        </label>
                                        <select {...register("city")} class="select w-full max-w-xs">
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Sylhet</option>
                                            <option>Rangpur</option>
                                            <option>Rajshahi</option>
                                            <option>Mymensingh</option>
                                            <option>Khulna</option>
                                            <option>Barisal</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full max-w-md ">
                                        <label className="label">
                                            <span className="label-text font-bold">Mobile</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Mobile"
                                            className="input input-bordered w-full max-w-md"
                                            {...register("mobile", {
                                                required: {
                                                    value: true,
                                                    message: 'Mobile is Required.'
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
                                    <input className='btn w-full max-w-md bg-primary hover:bg-sky-600 border-0 text-white font-bold' type="submit" value='Save' />
                                </form>
                            </div>




















                            <div class="modal-action">
                                <label for="update-profile-modal" class="btn bg-red-500 text-white border-0 btn-xs">Closed</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;