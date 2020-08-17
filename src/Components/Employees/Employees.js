import React, { useEffect, useReducer } from 'react';
import EmployeesForm from '../EmployeesForm/EmployeesForm';
import EmployeesTable from '../EmployeesTable/EmployeesTable';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return {
                employees: action.data,
                hasFetch: true
            }
        default:
            return state
    }
}

const Employees = () => {
    const [state, dispatch] = useReducer(reducer, {
        employees: [],
        hasFetch: false
    });

    useEffect(() => {
        fetchEmployees();
    }, [])

    const handlerNewEmployee = async (employee) => {
        const response = await fetch('http://localhost:3000/employees', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        console.log(res);
        fetchEmployees();
    }

    const fetchEmployees = () => {
        fetch('http://localhost:3000/employees')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_EMPLOYEES', data: response }));
    }

    return (
        <div className='container mt-3 animation-show'>
            <EmployeesForm loadEmployee={handlerNewEmployee} />
            <EmployeesTable
                employees={state.employees}
                hasFetchEmployees={state.hasFetch}
            />
        </div>
    )
}

export default Employees;