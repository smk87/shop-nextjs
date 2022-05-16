// Fetch products on server side (getServerSideProps) (production)

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';
import { getProducts } from 'lib/products';

interface HomepageProps {
    products: {
        id: number;
        title: string;
    }[];
}

export const getServerSideProps: GetServerSideProps<HomepageProps> = async (
    ctx
) => {
    console.log('[Homepage] getServerSideProps');

    const products = await getProducts();

    return {
        props: {
            products,
        },
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
