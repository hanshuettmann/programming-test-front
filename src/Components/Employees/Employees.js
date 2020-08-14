import React from 'react';
import EmployeesForm from '../EmployeesForm/EmployeesForm';
import EmployeesTable from '../EmployeesTable/EmployeesTable';

const Employees = () => {
    return (
        <div className='mt-3 animation-show'>
            <EmployeesForm />
            <EmployeesTable />
        </div>
    )
}

export default Employees;