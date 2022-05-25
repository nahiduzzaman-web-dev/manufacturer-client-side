import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`Wow Successsfully made an Admin`);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs border-0 bg-primary text-white">Make Admin</button>

                }
                {
                    role === 'admin' && <p className='text-secondary font-bold'>Admin Now</p>
                }
            </td>
            <td><button class="btn btn-xs bg-red-500 text-white border-0">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;