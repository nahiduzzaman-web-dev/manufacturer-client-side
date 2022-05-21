import React from 'react';
import { SiBlockchaindotcom } from 'react-icons/si';

const Blogs = () => {
    return (
        <div className='pt-20'>
            <h3 className='text-center text-primary text-2xl font-bold my-10'>Blogs- Some Question & Answer</h3>

            <div className='mx-20'>
                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q1. How will you improve the performance of a React Application ?
                    </div>
                    <div className="collapse-content">
                        <p className='flex'><SiBlockchaindotcom className='mr-5 text-secondary' /> Use React.Fragment to Avoid Adding Extra Nodes to the DOM</p>
                        <p className='flex'> <SiBlockchaindotcom className='mr-5 text-secondary' /> Use Production Build</p>
                        <p className='flex'> <SiBlockchaindotcom className='mr-5 text-secondary' /> Use React.Suspense and React.Lazy for Lazy Loading Components</p>
                        <p className='flex'><SiBlockchaindotcom className='mr-5 text-secondary' /> Use React.memo for Component Memoization</p>
                        <p className='flex'> <SiBlockchaindotcom className='mr-5 text-secondary' /> Virtualize a Large List Using react-window</p>
                        <p className='flex'><SiBlockchaindotcom className='mr-5 text-secondary' /> Wrapping up</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q2. What are the different ways to manage a state in a React application ?
                    </div>
                    <div className="collapse-content">
                        There are four main types of state you need to properly manage in your React apps:
                        <p> 1. Local state</p>
                        <p> 2. Global state</p>
                        <p> 3. Server state</p>
                        <p> 4. URL state</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q3. How does prototypical inheritance work ?
                    </div>
                    <div className="collapse-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q4. Why you do not set the state directly in React ?
                    </div>
                    <div className="collapse-content">
                        <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                    </div>
                </div>

                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q5. What is a unit test? Why should write unit tests ?
                    </div>
                    <div className="collapse-content">
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;