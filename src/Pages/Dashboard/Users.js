import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://blooming-lake-83888.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className="overflow-x-auto mx-20 mt-10 font-sans">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-cyan-500 text-white'>Users {users.length}</th>
                            <th className='bg-cyan-500 text-white'>Name</th>
                            <th className='bg-cyan-500 text-white'>Job</th>
                            <th className='bg-cyan-500 text-white'>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;