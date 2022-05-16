// Fetch products on client side using external API (useEffect)

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Title } from 'components/Title';
import { getProducts } from 'lib/products';

const HomePage: NextPage = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            console.log('[Homepage] useEffect');

            const products = await getProducts();

            setProducts(products);

            console.log('[Homepage] render:', products);
        })();
    }, []);

    return (
        <div>
            <Head>
                <title>Next Shop</title>
            </Head>

            <main className="px-6 py-4">
                <Title>Next Shop</Title>

                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default HomePage;
