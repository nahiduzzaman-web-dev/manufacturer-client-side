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
            fetch(`http://localhost:5000/order?orderEmail=${user.email}`, {
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
            <div class="stats shadow mt-20 w-full rounded-none">
                <div class="stat">
                    <div class="stat-title text-center text-2xl font-bold">Welcome to your DASHBOARD !</div>
                </div>
            </div>
            <div class="stats shadow w-full rounded-none">

                <div class="stat place-items-end">
                    <div class="stat-title"></div>
                    <div class="stat-value text-5xl text-green-400">< MdManageAccounts /></div>
                    <div class="stat-desc"></div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Orders</div>
                    <div class="stat-value text-secondary">{orders.length}</div>
                    <div class="stat-desc text-secondary">Don't hesitate to buy</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Register</div>
                    <div class="stat-value">{user?.displayName}</div>
                    <div class="stat-desc">Welcome here to Tools Provita Ltd.</div>
                </div>

            </div>

            <div class="drawer drawer-mobile">
                <input id="dasboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label htmlFor="dasboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">

                        <li className='bg-primary font-mono text-white font-bold mb-3'><Link to='/dashboard/order'>Order List</Link></li>
                        <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/review'>Client Reviews</Link></li>
                        <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/profile'>Profile</Link></li>
                        {
                            admin && <>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/users'>All Users</Link></li>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li className='bg-cyan-500 font-mono text-white font-bold mb-3'><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;