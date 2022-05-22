import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {

    return (
        <div>
            <div class="hero min-h-screen"
                style={{
                    background: `url('https://www.tsey.in/error-404.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                }}
            >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">Something is wrong !</h1>
                        <p class="mb-5">Click button and find your goal. Hopefully, you can enjoy everymoment. Don't hasitate to contact us.</p>
                        <Link to='/'><button class="btn btn-primary btn-wide">Go</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;