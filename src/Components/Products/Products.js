import React from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';
import ProductsForm from '../ProductsForm/ProductsForm';

const Products = () => {
    return (
        <div className='mt-3'>
            <h1>Cargar un producto</h1>
            <ProductsForm />
            <ProductsTable />
        </div>
    )
}

export default Products;