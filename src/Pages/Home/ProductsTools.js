import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductsTools = () => {
    const [products] = useProducts();

    return (
        <div>
            <div className='text-center font-bold'>
                <h4 className='text-primary tracking-[.20em] text-3xl uppercase'>Tools</h4>
                <h1 className='text-xl uppercase'>Don't Hesitate to contact us</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsTools;