import React from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';
import ProductsForm from '../ProductsForm/ProductsForm';

const Products = () => {
    const handlerNewProduct = (product) => {
        console.log(product)
    }

    return (
        <div className='mt-3 animation-show'>
            <ProductsForm loadProduct={handlerNewProduct} />
            <ProductsTable />
        </div>
    )
}

export default Products;