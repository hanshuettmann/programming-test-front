import React, { useReducer, useEffect } from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';
import ProductsForm from '../ProductsForm/ProductsForm';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.data,
                hasFetch: true
            }
        default:
            return state
    }
}

const Products = () => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        hasFetch: false
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const handlerNewProduct = async (product) => {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        console.log(res);
        fetchProducts();
    }

    const fetchProducts = () => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_PRODUCTS', data: response }));
    }

    return (
        <div className='container mt-3 animation-show'>
            <ProductsForm loadProduct={handlerNewProduct} />
            <ProductsTable
                products={state.products}
                hasFetchProducts={state.hasFetch}
            />
        </div>
    )
}

export default Products;