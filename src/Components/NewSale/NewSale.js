import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUTS':
            return {
                data: action.data
            }

        case 'SET_CLIENT':
            return {
                ...state,
                client: action.data
            }

        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.data,
                totalAmount: action.data.price * state.quantity
            }

        case 'SET_EMPLOYEE':
            return {
                ...state,
                employee: action.data
            }

        case 'SET_QUANTITY':
            return {
                ...state,
                quantity: action.data,
                totalAmount: action.data * state.product.price
            }

        case 'SET_AMOUNT':
            return {
                ...state,
                totalAmount: action.data
            }

        default:
            return state
    }
}

const NewSale = ({ clients, products, employees, loadSale }) => {
    const [state, dispatch] = useReducer(reducer, {
        client: {},
        employee: {},
        product: {
            price: 0
        },
        quantity: 1,
        totalAmount: 0
    });

    const inputClientOnChange = (e) => {
        let _id = e.target.value;
        const clientData = clients.find(client => {
            return (
                client._id === _id
            )
        })

        dispatch({ type: 'SET_CLIENT', data: clientData });
    }

    const inputProductOnChange = (e) => {
        let _id = e.target.value;
        const productData = products.find(product => {
            return (
                product._id === _id
            )
        })

        dispatch({ type: 'SET_PRODUCT', data: productData });
    }

    const inputEmployeeOnChange = (e) => {
        let _id = e.target.value;
        const employeeData = employees.find(employee => {
            return (
                employee._id === _id
            )
        })

        dispatch({ type: 'SET_EMPLOYEE', data: employeeData });
    }

    const inputQuantityOnChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue > 0 || inputValue === '') {
            if (inputValue.length === 0) {
                dispatch({ type: 'SET_QUANTITY', data: '' });
            } else {
                const quantity = isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value);
                dispatch({ type: 'SET_QUANTITY', data: quantity });
            }
        }
    }

    const inputAmountOnChange = (e) => {
        const totalAmount = parseFloat(e.target.value);
        console.log(totalAmount);

        dispatch({ type: 'SET_AMOUNT', data: totalAmount });
    }

    const addSale = (e) => {
        e.preventDefault();
        let errorMessage;
        let isValid = true;

        if (Object.keys(state.employee).length === 0) {
            errorMessage = 'Debes seleccionar un empleado de la lista.'
            isValid = false;
        }
        if (state.product.price === 0) {
            errorMessage = 'Debes seleccionar un producto de la lista.'
            isValid = false;
        }
        if (Object.keys(state.client).length === 0) {
            errorMessage = 'Debes seleccionar un cliente de la lista.'
            isValid = false;
        }
        if (state.quantity === 0 || state.quantity === '') {
            errorMessage = 'Debes ingresar una cantidad distinta de 0.'
            isValid = false;
        }
        if (!isValid) {
            alert(errorMessage);
        } else {
            loadSale(state);
        }
    }

    return (
            <div className='row justify-content-center'>
                <div className='col-12 col-md-10 text-left mb-3'>
                    <h1 className='mb-3'>Registrar venta</h1>
                    <form>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputEmployee'>Empleado</label>
                                <select
                                    id='inputEmployee'
                                    className='form-control'
                                    name='employee'
                                    onChange={inputEmployeeOnChange}
                                    defaultValue='0'
                                >
                                    <option value='0' disabled>Seleccionar empleado...</option>
                                    {employees.map((employee) => {
                                        return (
                                            <option
                                                key={employee._id}
                                                value={employee._id}
                                            >
                                                {`${employee.name} ${employee.lastname}`}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputClient'>Cliente</label>
                                <select
                                    id='inputClient'
                                    className='form-control'
                                    name='client'
                                    onChange={inputClientOnChange}
                                    defaultValue='0'
                                >
                                    <option value='0' disabled>Seleccionar cliente...</option>
                                    {clients.map((client) => {
                                        return (
                                            <option
                                                key={client._id}
                                                value={client._id}
                                            >
                                                {`${client.name} ${client.lastname}`}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputProduct'>Producto</label>
                                <select
                                    id='inputProduct'
                                    className='form-control'
                                    name='productName'
                                    defaultValue='0'
                                    onChange={inputProductOnChange}
                                >
                                    <option value='0' disabled>Seleccionar producto...</option>
                                    {products.map((product) => {
                                        return (
                                            <option
                                                key={product._id}
                                                value={product._id}
                                            >
                                                {`${product.name}`}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='form-group col-md-2'>
                                <label htmlFor='inputProductPrice'>Precio unitario</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputProductPrice'
                                    name='productPrice'
                                    value={'$ ' + state.product.price}
                                    disabled
                                />
                            </div>
                            <div className='form-group col-md-2'>
                                <label htmlFor='inputQuantity'>Cantidad</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='inputQuantity'
                                    name='quantity'
                                    value={state.quantity}
                                    onChange={inputQuantityOnChange}
                                />
                            </div>
                            <div className='form-group col-md-2'>
                                <label htmlFor='inputTotalAmount'>Total en pesos</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputTotalAmount'
                                    name='totalAmount'
                                    value={'$ ' + state.totalAmount}
                                    onChange={inputAmountOnChange}
                                    disabled
                                />
                            </div>
                        </div>
                        <button
                            className='btn btn-secondary'
                            onClick={addSale}
                        >
                            Agregar compra</button>
                    </form>
                </div>
            </div>
    )
}

NewSale.defaultProps = {
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
    ],
    clients: [
        {
            _id: 'asidh1o3o123j',
            name: 'Patricio',
            lastname: 'Canseco',
            dni: 37658563,
            birthDate: '25/04/1994',
            creditCard: '4001858525254712'
        },
        {
            _id: 'asidh1o3asdo123j',
            name: 'Hanna',
            lastname: 'Lombardo',
            dni: 34910995,
            birthDate: '09/01/1991',
            creditCard: '4001858525254712'
        },
        {
            _id: 'asidh22121o3o123j',
            name: 'Francisco',
            lastname: 'Rodriguez',
            dni: 32493397,
            birthDate: '20/02/1987',
            creditCard: '4001858525254712'
        }
    ],
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
    ],
    loadSale: (data) => {
        console.log(data)
    }
}

export default NewSale;