import React from 'react';

const ProductsTable = ({ products }) => {
    return (
        <div className='container'>
            <div className='col-12 col-md-10 text-left mb-3'>
                <h1>Productos disponibles</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Marca</th>
                            <th scope='col'>Precio</th>
                            <th scope='col'>Proveedor</th>
                            <th scope='col'>Vencimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={product._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{'$ ' + product.price}</td>
                                    <td>{product.provider}</td>
                                    <td>{product.dueDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ProductsTable.defaultProps = {
    products: [
        {
            _id: 'asidh1o3o123j',
            name: 'Queso untable',
            brand: 'La Serenísima',
            price: 70.0,
            provider: 'Juan',
            dueDate: '25/04/1994'
        },
        {
            _id: 'asidh1o3o123asdaj',
            name: 'Leche descremada',
            brand: 'La Serenísima',
            price: 50.0,
            provider: 'Marcos',
            dueDate: '25/04/1994'
        },
        {
            _id: 'asidh1o3Dadsad',
            name: 'Cerveza Negra',
            brand: 'Salta',
            price: 110.0,
            provider: 'Rodrigo',
            dueDate: '25/04/1994'
        },
        {
            _id: 'asidh1o3o2as31123j',
            name: 'Alfajor negro',
            brand: 'Jorgito',
            price: 35.0,
            provider: 'Pedro',
            dueDate: '25/04/1994'
        }
    ]
}

export default ProductsTable;