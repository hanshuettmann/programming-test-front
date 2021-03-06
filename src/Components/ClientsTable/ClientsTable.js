import React from 'react';
import TableSpinner from '../TableSpinner/TableSpinner';

const ClientsTable = ({ clients, hasFetchClients }) => {
    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-md-10 text-left mb-3'>
                <h1>Listado de clientes</h1>
            </div>
            <div className='table-responsive col-12 col-md-10 table-height'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>DNI</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellido</th>
                            <th scope='col'>Fecha de nacimiento</th>
                            <th scope='col'>Nº de tarjeta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!hasFetchClients ?
                            <TableSpinner />
                            : clients.length > 0 ?
                                clients.map((client, index) => {
                                    return (
                                        <tr
                                            key={client._id}
                                            className='animation-show'
                                        >
                                            <th scope='row'>{index + 1}</th>
                                            <td>{client.name}</td>
                                            <td>{client.lastname}</td>
                                            <td>{client.dni}</td>
                                            <td>{client.birthDate}</td>
                                            <td>{client.creditCard}</td>
                                        </tr>
                                    )
                                })
                                : <tr className='animation-show'>
                                    <td colSpan='7'>
                                        Todavía no has agregado ningún cliente...
                                </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ClientsTable.defaultProps = {
    clients: [
        {
            _id: 'asidh1o3o123j',
            name: 'Patricio',
            lastname: 'Hüttmann',
            dni: 37658563,
            birthDate: '25/04/1994',
            creditCard: '4001858525254712'
        },
        {
            _id: 'asidh1o3asdo123j',
            name: 'Hanna',
            lastname: 'Hüttmann',
            dni: 34910995,
            birthDate: '09/01/1991',
            creditCard: '4001858525254712'
        },
        {
            _id: 'asidh22121o3o123j',
            name: 'Francisco',
            lastname: 'Hüttmann',
            dni: 32493397,
            birthDate: '20/02/1987',
            creditCard: '4001858525254712'
        },
        {
            _id: 'asid321ash1o3o123j',
            name: 'Patricia',
            lastname: 'Pérez García',
            dni: 11707863,
            birthDate: '04/02/1955',
            creditCard: '4001858525254712'
        }
    ],
    hasFetchClients: false
}

export default ClientsTable;