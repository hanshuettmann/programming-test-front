import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUTS':
            return {
                data: action.data
            }
        default:
            return state
    }
}

const EmployeesForm = ({ loadEmployee }) => {
    const [state, dispatch] = useReducer(reducer, {
        data: {
            name: '',
            lastname: '',
            dni: '',
            idNumber: '',
            birthDate: '',
            age: ''
        }
    });

    const inputChange = (e) => {
        let name = e.target.name;
        let newData = state.data;
        newData[name] = e.target.value;

        dispatch({ type: 'SET_INPUTS', data: newData });
    }

    const validateInputs = (e) => {
        e.preventDefault();
        let errorMessage;
        let isValid = true;

        if (state.data.name.length < 1) {
            errorMessage = 'Debes ingresar un nombre válido.'
            isValid = false;
        }
        if (state.data.lastname.length < 1) {
            errorMessage = 'Debes ingresar un apellido válido.'
            isValid = false;
        }
        if (state.data.dni.length !== 8) {
            errorMessage = 'Debes ingresar un DNI válido. Recuerda colocar un 0 delante de ser necesario.'
            isValid = false;
        }
        if (state.data.idNumber.length !== 6) {
            errorMessage = 'Debes ingresar un número de identificación válido.'
            isValid = false;
        }
        if (state.data.birthDate === '') {
            errorMessage = 'Debes indicar tu fecha de nacimiento.'
            isValid = false;
        }
        if (state.data.age === '') {
            errorMessage = 'Debes ingresar tu edad.'
            isValid = false;
        }
        if (!isValid) {
            alert(errorMessage);
        } else {
            loadEmployee(state.data);
        }
    }

    return (
        <div className='row justify-content-center mb-4'>
            <div className='col-12 col-md-10 text-left mb-3'>
                <h1>Cargar un empleado</h1>
            </div>
            <div className='col-12 col-md-10 text-left'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputEmployeeName'>Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputEmployeeName'
                                name='name'
                                onChange={inputChange}
                                value={state.data.name}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputEmployeeLastname'>Apellido</label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputEmployeeLastname'
                                name='lastname'
                                onChange={inputChange}
                                value={state.data.lastname}
                            />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-3'>
                            <label htmlFor='inputEmployeeDni'>DNI</label>
                            <input
                                type='number'
                                className='form-control'
                                id='inputEmployeeDni'
                                name='dni'
                                onChange={inputChange}
                                value={state.data.dni}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label htmlFor='inputEmployeeIdNumber'>ID</label>
                            <input
                                type='number'
                                className='form-control'
                                id='inputEmployeeIdNumber'
                                name='idNumber'
                                onChange={inputChange}
                                value={state.data.idNumber}
                            />
                            <small id="idHelp" className="form-text text-muted">Número de 6 dígitos del seguro.</small>
                        </div>
                        <div className='form-group col-md-3'>
                            <label htmlFor='inputEmployeeBirthDate'>Fecha de nacimiento</label>
                            <input
                                type='date'
                                className='form-control'
                                id='inputEmployeeBirthDate'
                                name='birthDate'
                                onChange={inputChange}
                                value={state.data.birthDate}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label htmlFor='inputEmployeeAge'>Edad</label>
                            <input
                                type='number'
                                className='form-control'
                                id='inputEmployeeAge'
                                name='age'
                                onChange={inputChange}
                                value={state.data.age}
                            />
                        </div>
                    </div>
                    <button
                        onClick={validateInputs}
                        className='btn btn-secondary'
                    >
                        Cargar</button>
                </form>
            </div>
        </div>
    )
}

EmployeesForm.defaultProps = {
    loadEmployee: (data) => {
        console.log(data)
    }
}

export default EmployeesForm;