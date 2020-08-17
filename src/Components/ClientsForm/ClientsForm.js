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

const ClientsForm = ({ loadClient }) => {
    const [state, dispatch] = useReducer(reducer, {
        data: {
            name: '',
            lastname: '',
            dni: '',
            creditCard: '',
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
        if (state.data.creditCard.length !== 16) {
            errorMessage = 'Debes ingresar un número de tarjeta válido.'
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
            loadClient(state.data);
        }
    }


    return (
            <div className='row justify-content-center mb-4'>
                <div className='col-12 col-md-10 text-left mb-3'>
                    <h1>Cargar un cliente</h1>
                </div>
                <div className='col-12 col-md-10 text-left'>
                    <form>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputClientName'>Nombre</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputClientName'
                                    name='name'
                                    onChange={inputChange}
                                    value={state.data.name}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputClientLastname'>Apellido</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputClientLastname'
                                    name='lastname'
                                    onChange={inputChange}
                                    value={state.data.lastname}
                                />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col-md-3'>
                                <label htmlFor='inputClientDni'>DNI</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='inputClientDni'
                                    name='dni'
                                    onChange={inputChange}
                                    value={state.data.dni}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label htmlFor='inputClientCreditCard'>Nº Tarjeta de crédito</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='inputClientCreditCard'
                                    name='creditCard'
                                    onChange={inputChange}
                                    value={state.data.creditCard}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label htmlFor='inputClientBirthDate'>Fecha de nacimiento</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    id='inputClientBirthDate'
                                    name='birthDate'
                                    onChange={inputChange}
                                    value={state.data.birthDate}
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label htmlFor='inputClientAge'>Edad</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='inputClientAge'
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

ClientsForm.defaultProps = {
    loadClient: (data) => {
        console.log(data)
    }
}

export default ClientsForm;