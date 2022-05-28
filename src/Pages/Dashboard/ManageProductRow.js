import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ product, index, refetch }) => {

    const handleDelete = () => {
        fetch(`https://blooming-lake-83888.herokuapp.com/tool/${product._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${product.name} is Deleted`);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar bg-base-300 rounded-md">
                    <div className="w-24 mask mask-hexagon">
                        <img src={product.image} alt='' />
                    </div>
                </div>
            </td>
            <td>{product.name}</td>
            <td>{product.available_quantity}</td>
            <td>${product.price}</td>
            <td>

                <button onClick={handleDelete} className="btn btn-xs border-0 bg-red-500 text-white- font-bold">Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductRow;