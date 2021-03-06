import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://blooming-lake-83888.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Faild to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Wow Successsfully made an Admin`);
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs border-0 bg-primary text-white">Make Admin</button>

                }
                {
                    role === 'admin' && <p className='text-secondary font-bold'>Admin Now</p>
                }
            </td>
            <td><button className="btn btn-xs bg-red-500 text-white border-0">Remove</button></td>
        </tr>
    );
};

export default UserRow;