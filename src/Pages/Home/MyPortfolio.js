import React from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { AiFillPhone } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import photography from '../../images/photography.png';
import doctor from '../../images/doctors.png';
import warehouse from '../../images/warehouse.png';
import Footer from '../Shared/Footer';

const MyPortfolio = () => {
    return (
        <div className='mx-20'>
            <div class="hero min-h-screen font-sans">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold"><span>Hi, I'm</span> <br /><span className='text-primary'> Md. Nahiduzzaman Nahid</span></h1>
                        <h3 className='text-3xl'>Web Designer & Developer</h3>
                        <p class="py-6">This is me! Professional Web Designer & Developer. Code is my blood, That's I'm satiesfied in my life. I believed that "Stay foolish, stay hungry". I like to learn more to design and develop sites. Thats' why I'm here and will create your web design & will find out your site's bug. Stay connect with me</p>

                        <label for="hire-me-modal" class="btn modal-button btn-primary">Hire Me</label>
                        <input type="checkbox" id="hire-me-modal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="hire-me-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="text-lg font-bold">Contact with me.</h3>
                                <p class=" flex">
                                    <span className='text-2xl text-secondary mr-3'><SiMinutemailer /></span>
                                    <span>nahiduzzaman0@gmail.com</span>
                                </p>
                                <p class=" flex">
                                    <span className='text-2xl text-secondary mr-3'><AiFillPhone /></span>
                                    <span>01303384414</span>
                                </p>
                                <p class=" flex">
                                    <span className='text-2xl text-secondary mr-3'><ImLocation2 /></span>
                                    <span>Mirpur 2, Dhaka, Bangladesh</span>
                                </p>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/nahiduzzaman0/">
                                    <button class="btn btn-sm mt-5 bg-sky-600 hover:bg-primary border-0 font-bold text-white">

                                        <span className='mr-2'>LinkedIn</span>
                                        <AiFillLinkedin className='text-xl' />

                                    </button>
                                </a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/nahiduzzaman28" className='ml-5'>
                                    <button class="btn btn-sm mt-5 bg-secondary hover:bg-primary border-0 font-bold text-white">

                                        <span className='mr-2'>Facebook</span>
                                        <AiFillFacebook className='text-xl' />

                                    </button>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div class="card shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://miro.medium.com/max/1400/0*4DpFVUP_VfkhzSIL" alt="" class="rounded-xl" style={{ height: '200px' }} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Web Design</h2>
                        <p>Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website's overall functionality.</p>
                    </div>
                </div>
                <div class="card shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg" alt="" class="rounded-xl" style={{ height: '200px' }} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Web Development</h2>
                        <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.</p>
                    </div>
                </div>
                <div class="card shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://www.webtempleasia.com/website-design-blog/data/editor/post-img/68-website-maintenance-tasks-bug-fixes/post-thumbail-40-1003x627.jpg?v=1560418094645" alt="" class="rounded-xl" style={{ height: '200px' }} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Web Bug Fixes</h2>
                        <p>Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website's overall functionality.</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='mt-20'>
                    <h4 className='font-bold'>HTML5</h4>
                    <progress class="progress progress-info w-56" value="95" max="100"></progress>
                    <h4 className='font-bold'>CSE</h4>
                    <progress class="progress progress-info w-56" value="80" max="100"></progress>
                    <h4 className='font-bold'>Bootstrap</h4>
                    <progress class="progress progress-info w-56" value="85" max="100"></progress>
                    <h4 className='font-bold'>Tailwind</h4>
                    <progress class="progress progress-info w-56" value="75" max="100"></progress>
                    <h4 className='font-bold'>React</h4>
                    <progress class="progress progress-info w-56" value="80" max="100"></progress>
                    <h4 className='font-bold'>Node JS.</h4>
                    <progress class="progress progress-info w-56" value="60" max="100"></progress>
                </div>
            </div>

            <div className='mt-20'>
                <h4 className='text-center text-2xl font-bold text-primary mb-10'>Education Qualification</h4>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    <div class="card shadow-2xl bg-primary text-white">
                        <div class="card-body items-center text-center">
                            <h5 className='font-bold'>DAFFODIL INTERNATIONAL UNIVERSITY <span>2013-2019</span></h5>
                            <h6>Bachelor of Computer Science</h6>
                            <p>CGPA: 3.25 (4)</p>
                            <p>Computer Science</p>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div class="card  shadow-2xl bg-secondary text-white">
                        <div class="card-body items-center text-center">
                            <h5 className='font-bold'>BCIC COLLEGE 2021 <span>2021
                            </span></h5>
                            <h6>Higher Secondary Certificate</h6>
                            <p>GPA: 4.5 (5)</p>
                            <p>Science Department</p>
                            <p>Dhaka Board</p>
                        </div>
                    </div>
                    <div class="card  shadow-2xl bg-green-500 text-white">
                        <div class="card-body items-center text-center">
                            <h5 className='font-bold'>DRohanpur A.B Govt. High School 2009</h5>
                            <h6>Secondary School Certificate</h6>
                            <p>GPA: 5 (5)
                            </p>
                            <p> Science Department</p>
                            <p>Rajshahi Board</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-20'>
                <h4 className='text-center text-2xl font-bold text-primary mb-10'>Some Projects Done</h4>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 cursor-pointer'>
                    <div class="card shadow-xl tooltip-open" data-tip="Click me">
                        <a href="https://ray-photography.web.app/" target='_blank' rel="noopener noreferrer">
                            <figure><img src={photography} alt="" /></figure>
                        </a>
                    </div>
                    <div class="card shadow-xl tooltip-open" data-tip="Click me">
                        <a href="https://clason-warehouse.web.app/" target='_blank' rel="noopener noreferrer">
                            <figure><img src={warehouse} alt="" /></figure>
                        </a>
                    </div>
                    <div class="card shadow-xl tooltip-open" data-tip="Click me">
                        <a href=" https://doctors-portal-14f3a.web.app/" target='_blank' rel="noopener noreferrer">
                            <figure><img src={doctor} alt="" /></figure>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MyPortfolio;