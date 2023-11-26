// customer-ui/src/pages/Home.js
import { useEffect, useState } from 'react';
import { sharedData } from '../shared/data';
import { getFromLocalStorage } from '../shared/localStorage';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = getFromLocalStorage('products');
        setProducts(storedProducts || sharedData.products);
    }, []);

    return (
        // render customer UI with products

        <></>
    );
};
