const stripProduct = (product: any) => {
    return { id: product.id, title: product.title };
};

export const getProducts = async () => {
    const response = await fetch('http://localhost:1337/products');
    const products: any[] = await response.json();

    return products.map(stripProduct);
};
