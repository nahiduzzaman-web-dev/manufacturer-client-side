import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { name, image, description, minimum_quantity, available_quantity, price } = product;
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/purchase/${id}`);
    }


    return (
        <div className="card w-96 bg-base-100 shadow-2xl mx-5 my-10">
            <figure className="pt-10 bg-primar">
                <img src={image} alt="Album" style={{ width: '250px', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset' }} className='hover: shadow-2xl' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center text-primary text-2xl">{name}</h2>
                <p>{description}</p>
                <div className='text-left font-mono '>
                    <p>
                        <span className='text-secondary'>Minimum Quantity:</span>
                        {minimum_quantity} <span className='text-base-300'>units</span>
                    </p>
                    <p><span className='text-secondary'>Available Quantity:</span>
                        {available_quantity} <span className='text-base-300'>units</span></p>
                </div>
                <p className=''>
                    <span className='text-red-500 text-2xl font-bold'>$</span>
                    <span className='text-2xl font-bold'> {price}</span> <span className='text-base-300'> / unit</span>
                </p>

            </div>
            <button
                onClick={() => handlePurchase(product._id)}
                className="btn btn-block rounded-none bg-primary border-0 text-white capitalize text-2xl">Purchase</button>
        </div>
    );
};

export default ProductCard;