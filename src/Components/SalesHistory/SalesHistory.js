import React from 'react';

const SalesHistory = ({ history }) => {
    return (
        <div className='container'>
            <div className='col-12 col-md-10 text-left mb-3'>
                <h1>Registro de ventas</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>Fecha</th>
                            <th scope='col'>ID empleado</th>
                            <th scope='col'>Tarjeta cliente</th>
                            <th scope='col'>Monto total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((sale, index) => {
                            return (
                                <tr key={sale._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{sale.date}</td>
                                    <td>{sale.employeeId}</td>
                                    <td>{sale.clientCreditCard}</td>
                                    <td>{'$ ' + sale.amount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

SalesHistory.defaultProps = {
    history: [
        {
            _id: 'asidhas1o3asd11o123j',
            date: '14/08/2020',
            employeeId: '123456',
            clientCreditCard: '400185859696',
            amount: '120'
        },
        {
            _id: 'asidhass21o3os23j',
            date: '14/08/2020',
            employeeId: '123456',
            clientCreditCard: '400185859696',
            amount: '3500'
        },
        {
            _id: 'asidhassd11o3o1e23j',
            date: '14/08/2020',
            employeeId: '123456',
            clientCreditCard: '400185859696',
            amount: '5000'
        },
        {
            _id: 'asidhas1dd112o3o123j',
            date: '14/08/2020',
            employeeId: '123456',
            clientCreditCard: '400185859696',
            amount: '2000'
        }
    ]
}

export default SalesHistory;