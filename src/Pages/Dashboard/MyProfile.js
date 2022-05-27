import React, { useEffect, useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/profile/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])

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
                    const profile = {
                        name: data.name,
                        email: data.email,
                        education: data.education,
                        mobile: data.mobile,
                        location: data.location,
                        linkedinUrl: data.linkedin,
                        image: img
                    }
                    fetch('http://localhost:5000/profile', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(profile)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('profile Added. Thanks');
                                reset();
                            }
                            else {
                                toast.error('Again Try please');
                            }
                        })

                }

            })
        // const updateProfile = {
        //     name: profile.name,
        //     email: profile.email,
        //     education: profile.education,
        //     mobile: profile.mobile,
        //     location: profile.location,
        //     linkedinUrl: profile.linkedin,
        //     image: profile.image

        // }
        // console.log(updateProfile);
        // fetch(`http://localhost:5000/profile/${user.email}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type ': 'application/json'
        //     },
        //     body: JSON.stringify(updateProfile)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         toast.success('Update Successfully. Yeah!')
        //         console.log('update', data);
        //     })


    }
    return (
        <div className='mx-20 py-10'>

            <div class="card lg:card-side bg-base-100 shadow-xl">

                <div class="avatar  online" style={{ boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' }}>
                    <div class="rounded-full py-5 px-8" >
                        <img src={profile.image} alt="Album" style={{ width: '350px' }} />
                    </div>
                </div>
                {/* <figure><img src={profile.image} alt="Album" style={{ width: '450px' }} /></figure> */}

                <div className='card-body'>
                    <h2 class="text-xl flex items-center"> <FaUserCircle className='mr-3 text-primary' /> {user?.displayName}</h2>
                    <h2 class="text-xl flex items-center"><MdEmail className='mr-3 text-primary' />{user?.email}</h2>

                    <h2 class="card-title ">Education: {profile.education}</h2>
                    <h2 class="card-title ">Location: {profile.location}</h2>
                    <h2 class="card-title ">Mobile: {profile.mobile}</h2>

                    <a target='_blank' rel="noopener noreferrer" href={profile.linkedinUrl} className='flex items-center mb-10'>
                        <AiFillLinkedin className='text-xl text-sky-600 font-bold' />
                        <span className='font-bold tooltip tooltip-open tooltip-right tooltip-info' data-tip="Visit My Linkedin">Linkedin</span>
                    </a>



                    <label for="update-profile-modal" class="btn btn-sm lg:mx-20 rounded bg-primary border-0 text-white capitalize text-xl hover:bg-sky-600">Update Profile</label>
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
                                        <select {...register("location")} class="select w-full max-w-xs">
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

                                    <div className="form-control w-full max-w-md ">
                                        <label className="label">
                                            <span className="label-text font-bold">Linkedin Url</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Linkedin Url"
                                            className="input input-bordered w-full max-w-md"
                                            {...register("linkedin", {
                                                required: {
                                                    value: true,
                                                    message: 'Linkedin Url is Required.'
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