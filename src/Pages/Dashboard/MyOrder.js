import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://blooming-lake-83888.herokuapp.com/order?orderEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user, navigate]);

    const handleDelete = () => {

    }

    return (
        <div>

            <div className="overflow-x-auto pt-10 mx-20">
                <table className="table w-full">

                    <thead>
                        <tr className=''>
                            <th className='bg-primary text-white'></th>
                            <th className='bg-primary text-white'>Name</th>
                            <th className='bg-primary text-white'>Quantity</th>
                            <th className='bg-primary text-white'>Price (Unit)</th>
                            <th className='bg-primary text-white'>Total Price</th>
                            <th className='bg-primary text-white'>Picture</th>
                            <th className='bg-primary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>{order.orderQuantity}</td>
                                <td>${order.price}</td>
                                <td>${(parseInt(order.orderQuantity)) * order.price}</td>
                                <td>
                                    <img src={order.productImg} alt="" style={{ width: '50px' }} />
                                </td>
                                <td>
                                    <button onClick={handleDelete} className="btn btn-xs bg-red-500 border-0 text-white rounded-full">
                                        <div className="tooltip tooltip-open tooltip-right z-100" data-tip="Delete">
                                            <RiDeleteBin2Fill />
                                        </div>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;