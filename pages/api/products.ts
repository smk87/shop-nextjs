import { getProducts } from 'lib/products';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const products = await getProducts();

    res.status(200).json(products);
};

export default handler;
