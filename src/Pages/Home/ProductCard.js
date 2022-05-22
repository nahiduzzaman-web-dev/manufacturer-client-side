import React from 'react';

const ProductCard = ({ product }) => {
    const { name, image, description, minimum_quantity, available_quantity, price } = product;
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
                        <span className=''> {minimum_quantity} pis</span>
                    </p>
                    <p><span className='text-secondary'>Available Quantity:</span> {available_quantity} pis</p>
                </div>
                <p className='text-2xl font-bold'>
                    <span className='text-red-500'>$</span>
                    <span> {price}</span>
                </p>

            </div>
            <button class="btn btn-block rounded-none bg-primary border-0 text-white capitalize text-2xl">Purchase</button>
        </div>
    );
};

export default ProductCard;