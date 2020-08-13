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

const ProductsForm = () => {
    const [state, dispatch] = useReducer(reducer, {
        data: {
            name: '',
            price: '',
            brand: '',
            dueDate: '',
            provider: ''
        }
    });

    const loadProduct = (e) => {
        e.preventDefault();
        console.log(state.data);
    }

    const inputChange = (e) => {
        let name = e.target.name;
        let newData = state.data;
        newData[name] = e.target.value;

        dispatch({ type: 'SET_INPUTS', data: newData });
    }

    return (
        <div className='container mb-5 text-left'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-10'>
                    <form className="was-validated">
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputProductName'>Nombre</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputProductName'
                                    name='name'
                                    onChange={inputChange}
                                    value={state.data.name}
                                />
                            </div>

                            <div className='form-group col-md-4'>
                                <label htmlFor='inputProductBrand'>Marca</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputProductBrand'
                                    name='brand'
                                    onChange={inputChange}
                                    value={state.data.brand}
                                />
                            </div>
                            <div className='form-group col-md-2'>
                                <label htmlFor='inputProductPrice'>Precio</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='inputProductPrice'
                                    name='price'
                                    onChange={inputChange}
                                    value={state.data.price}
                                />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputProductDueDate'>Fecha de vencimiento</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    id='inputProductDueDate'
                                    name='dueDate'
                                    onChange={inputChange}
                                    value={state.data.dueDate}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor='inputProductProvider'>Proveedor</label>
                                <select
                                    id='inputProductProvider'
                                    className='form-control'
                                    name='provider'
                                    onChange={inputChange}
                                    value={state.data.provider}
                                >
                                    <option value='Marcos'>Marcos</option>
                                    <option value='Rodrigo'>Rodrigo</option>
                                    <option value='Carlos'>Carlos</option>
                                    <option value='Juan'>Juan</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={loadProduct}
                            className='btn btn-secondary'
                        >
                            Cargar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductsForm;