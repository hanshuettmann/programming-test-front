import React from 'react';
import TableSpinner from '../TableSpinner/TableSpinner';

const HistoryTable = ({ sales, hasFetchSales }) => {
    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-md-10 text-left mb-3'>
                <h1>Historial de ventas</h1>
            </div>
            <div className='table-responsive col-12 col-md-10 table-height'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>Fecha</th>
                            <th scope='col'>Empleado</th>
                            <th scope='col'>ID</th>
                            <th scope='col'>Cliente</th>
                            <th scope='col'>Monto total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!hasFetchSales ?
                            <TableSpinner /> :
                            sales.length > 0 ?
                                sales.map((sale, index) => {
                                    return (
                                        <tr
                                            key={sale._id}
                                            className='animation-show'
                                        >
                                            <th scope='row'>{index + 1}</th>
                                            <td>{sale.date}</td>
                                            <td>{`${sale.employee.name} ${sale.employee.lastname}`}</td>
                                            <td>{sale.employee.idNumber}</td>
                                            <td>{`${sale.client.name} ${sale.client.lastname}`}</td>
                                            <td>{'$ ' + sale.totalAmount}</td>
                                        </tr>
                                    )
                                })
                                : <tr className='animation-show'>
                                    <td colSpan='7'>
                                        Todavía no has realizado ninguna venta...
                            </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistoryTable;