// Fetch products on server side with Incremental Static Regeneration (getStaticProps) (Works only in production)

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';
import { getProducts } from 'lib/products';

interface HomepageProps {
    products: {
        id: number;
        title: string;
    }[];
}

export const getStaticProps: GetStaticProps<HomepageProps> = async (ctx) => {
    console.log('[Homepage] getStaticProps(ISR)');

    const products = await getProducts();

    return {
        props: {
            products,
        },
        revalidate: 30, // seconds
    };
};

const HomePage: NextPage<HomepageProps> = ({ products }) => {
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
