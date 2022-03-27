import type { NextPage } from 'next';
import Head from 'next/head';

import { Title } from 'components/Title';

const HomePage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Next Shop</title>
            </Head>

            <main className="px-6 py-4">
                <Title>Next Shop</Title>
                <p>Product to display</p>
            </main>
        </div>
    );
};

export default HomePage;
