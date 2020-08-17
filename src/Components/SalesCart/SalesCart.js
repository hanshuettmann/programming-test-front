import React from 'react';
import './SalesCart.css';

const SalesCart = ({ sales, deleteOne, deleteAll, confirmSale, totalAmount }) => {
    return (
        <div className='row justify-content-center'>
            <div className='table-responsive col-12 col-md-10 table-height'>
                <div className='d-flex justify-content-end mb-2'>
                    <button
                        disabled={sales.length === 0 ? true : false}
                        className='btn btn-secondary'
                        onClick={deleteAll}
                    >
                        Vaciar tabla
                    </button>
                    <button
                        disabled={sales.length === 0 ? true : false}
                        className='btn btn-secondary ml-1 mr-1'
                        onClick={confirmSale}
                    >
                        Confirmar compra
                    </button>
                    <div style={{ width: '20%' }}>
                        <input
                            type='text'
                            className='form-control text-right'
                            name='totalAmount'
                            value={'$ ' + totalAmount}
                            disabled
                        />
                    </div>
                </div>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>Producto</th>
                            <th scope='col'>Marca</th>
                            <th scope='col'>Cantidad</th>
                            <th scope='col'>Subtotal</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.length > 0 ?
                            sales.map((sale, index) => {
                                return (
                                    <tr key={index}
                                        className='animation-show table-alignment'
                                    >
                                        <th scope='row'>{index + 1}</th>
                                        <td>{sale.product.name}</td>
                                        <td>{sale.product.brand}</td>
                                        <td>{sale.quantity}</td>
                                        <td>{'$ ' + sale.totalAmount}</td>
                                        <td>
                                            <button
                                                className='btn btn-danger fa fa-trash fa-1x'
                                                onClick={deleteOne}
                                                data-index={index}
                                            >
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            : <tr className='animation-show'>
                                <td colSpan='7'>
                                    Todavía no has agregado ninguna compra...
                                </td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

SalesCart.defaultProps = {
    sales: [],
    deleteOne: (data) => {
        console.log(data);
    },
    deleteAll: () => console.log('Borrar todos!'),
    confirmSale: () => console.log('Confirmar Venta!'),
    totalAmount: 0
}

export default SalesCart;