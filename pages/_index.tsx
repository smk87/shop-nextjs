import type { NextPage } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';

const products = [
    {
        id: 1,
        title: 'Product 1',
    },
    { id: 2, title: 'Product 2' },
];

const HomePage: NextPage = () => {
    console.log('[Homepage] render:', products);

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
