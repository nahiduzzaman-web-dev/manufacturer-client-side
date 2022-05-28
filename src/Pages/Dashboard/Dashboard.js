import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { MdManageAccounts } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [admin] = useAdmin(user);

    useEffect(() => {
        if (user) {
            fetch(`https://blooming-lake-83888.herokuapp.com/order?orderEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div className='bg-base-200'>
            <div className="stats shadow mt-20 w-full rounded-none">
                <div className="stat">
                    <div className="stat-title text-center text-2xl font-bold">Welcome to your DASHBOARD !</div>
                </div>
            </div>
            <div className="stats shadow w-full rounded-none">

                <div className="stat place-items-end">
                    <div className="stat-title"></div>
                    <div className="stat-value text-5xl text-green-400">< MdManageAccounts /></div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value text-secondary">{orders.length}</div>
                    <div className="stat-desc text-secondary">Don't hesitate to buy</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Register</div>
                    <div className="stat-value">{user?.displayName}</div>
                    <div className="stat-desc">Welcome here to Tools Provita Ltd.</div>
                </div>

            </div>

            <div className="drawer drawer-mobile">
                <input id="dasboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dasboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                        <li className=' bg-primary font-mono text-white font-bold mb-3'><Link to='/dashboard/profile'>My Profile</Link></li>
                        <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/order'>My Order</Link></li>
                        {
                            admin && <>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/users'>Make Admin</Link></li>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                            </>
                        }
                        {
                            !admin && <>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/review'>Add Reviews</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;