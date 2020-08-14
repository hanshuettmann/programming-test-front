import React from 'react';

const EmployeesTable = ({ employees }) => {
    return (
        <div className='container'>
            <div className='col-12 col-md-10 text-left mb-3'>
                <h1>Empleados registrados</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>DNI</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellido</th>
                            <th scope='col'>Fecha de nacimiento</th>
                            <th scope='col'>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => {
                            return (
                                <tr key={employee._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.dni}</td>
                                    <td>{employee.birthDate}</td>
                                    <td>{employee.idNumber}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

EmployeesTable.defaultProps = {
    employees: [
        {
            _id: 'asidh1o3o123j',
            name: 'Patricio',
            lastname: 'Hüttmann',
            dni: 37658563,
            birthDate: '25/04/1994',
            idNumber: '123456'
        },
        {
            _id: 'asidh1o3asdo123j',
            name: 'Hanna',
            lastname: 'Hüttmann',
            dni: 34910995,
            birthDate: '09/01/1991',
            idNumber: '654321'
        },
        {
            _id: 'asidh22121o3o123j',
            name: 'Francisco',
            lastname: 'Hüttmann',
            dni: 32493397,
            birthDate: '20/02/1987',
            idNumber: '123654'
        },
        {
            _id: 'asid321ash1o3o123j',
            name: 'Patricia',
            lastname: 'Pérez García',
            dni: 11707863,
            birthDate: '04/02/1955',
            idNumber: '321456'
        }
    ]
}

export default EmployeesTable;