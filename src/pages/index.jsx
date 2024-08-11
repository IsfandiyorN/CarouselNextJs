// src/pages/index.jsx
import React from 'react';
import PhoneUsageChart from '../components/PhoneUsageChart';
import ProductsPage from './products';

export const getStaticProps = async () => {
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
};

const HomePage = ({ products }) => {
    const usageData = [
        300, 450, 200, 700, 1200, 900, 1500, 1800, 1300, 1100, 600, 400, 1500, 2200,
        2000, 1800, 2400, 2300, 2100, 1900, 2500, 2200, 1800, 1600,
    ];

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-8">Dashboard</h1>
            <PhoneUsageChart usageData={usageData} />
            <ProductsPage products={products} />
        </div>
    );
};

export default HomePage;
