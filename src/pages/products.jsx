// src/pages/products.jsx
import React from 'react';
import { Carousel } from 'flowbite-react';

export async function getStaticProps() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await res.json();

        return {
            props: {
                products,
            },
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            props: {
                products: [],
            },
        };
    }
}

const ProductsPage = ({ products = [] }) => {
    if (!products.length) {
        return <p>No products available</p>;
    }

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-center text-2xl font-bold mb-4">Products Carousel</h1>
            <Carousel>
                {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="flex flex-col items-center">
                        <img src={product.image} alt={product.title} className="h-64 object-contain" />
                        <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
                        <p className="text-sm text-gray-500">${product.price}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductsPage;
