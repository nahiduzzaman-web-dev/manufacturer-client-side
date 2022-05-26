import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch('http://localhost:5000/tool', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    console.log(tool);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div class="tabs mt-10">
                    <p class="tab tab-lifted">Storage</p>
                    <p class="indicator tab tab-lifted tab-active font-bold font-mono px-10">
                        Total Products
                        <span class="indicator-item badge rounded-full py-3 bg-orange-500 text-white font-bold text-xl border-0">{tool.length}</span>
                    </p>
                    <p class="tab tab-lifted">Room</p>
                </div>
            </div>

            <div class="overflow-x-auto pt-10 mx-20">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th className='bg-cyan-500 text-white font-mono font-bold'></th>
                            <th className='bg-cyan-500 text-white font-mono font-bold'>Photo</th>
                            <th className='bg-cyan-500 text-white font-mono font-bold'>Name</th>
                            <th className='bg-cyan-500 text-white font-mono font-bold'>Quantity</th>
                            <th className='bg-cyan-500 text-white font-mono font-bold'>Price</th>
                            <th className='bg-cyan-500 text-white font-mono font-bold'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tool.map((product, index) => <ManageProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;