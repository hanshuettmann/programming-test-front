import React, {
    useReducer,
    useEffect,
    useRef
} from 'react';
import ReactToPrint from 'react-to-print';
import moment from 'moment';
import SalesCart from '../SalesCart/SalesCart';
import NewSale from '../NewSale/NewSale';
import Bill from '../Bill/Bill';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SALE':
            return {
                ...state,
                clientSelected: action.data.client,
                employeeSelected: action.data.employee,
                sales: [
                    ...state.sales,
                    {
                        product: action.data.product,
                        quantity: action.data.quantity,
                        totalAmount: action.data.totalAmount
                    }
                ]
            }
        case 'DELETE_ALL':
            return {
                ...state,
                sales: []
            }
        case 'DELETE_ONE':
            return {
                ...state,
                sales: action.data
            }
        case 'SET_TOTAL':
            return {
                ...state,
                totalAmount: action.data
            }
        case 'SET_CLIENTS':
            return {
                ...state,
                clients: action.data
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.data
            }
        case 'SET_EMPLOYEES':
            return {
                ...state,
                employees: action.data
            }
        case 'SET_FETCH':
            return {
                ...state,
                isFetch: true
            }
        case 'SET_SPINNER':
            return {
                ...state,
                hasFetchNewSale: !state.hasFetchNewSale
            }
        case 'PRINT_BILL':
            return {
                ...state,
                printBill: !state.printBill
            }
        case 'SET_POST_RESPONSE':
            return {
                ...state,
                postSaleResponse: action.data,
                printBill: true
            }
        default:
            return state
    }
}

const Sales = () => {
    const [state, dispatch] = useReducer(reducer, {
        clientSelected: {},
        employeeSelected: {},
        sales: [],
        totalAmount: 0,
        clients: [],
        employees: [],
        products: [],
        isFetch: false,
        hasFetchNewSale: true,
        printBill: false,
        postSaleResponse: {}
    });
    const componentRef = useRef();

    useEffect(() => {
        if (!state.isFetch) {
            fetchClients();
            fetchProducts();
            fetchEmployees();

            dispatch({ type: 'SET_FETCH' });
        }

        handlerSumTotal();
    }, [state.sales]);

    const handlerSumTotal = () => {
        let add = 0;
        for (let i = 0; i < state.sales.length; i++) {
            add += state.sales[i].totalAmount
        }
        dispatch({ type: 'SET_TOTAL', data: add });
    }

    const handlerNewSale = (sale) => {
        dispatch({ type: 'SET_SALE', data: sale });
    }

    const handlerDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' });
    }

    const handlerConfirmSale = async () => {
        if (window.confirm('Estás seguro que deseas confirmar la compra?')) {
            const sale = {
                employee: {
                    name: state.employeeSelected.name,
                    lastname: state.employeeSelected.lastname,
                    idNumber: state.employeeSelected.idNumber
                },
                client: {
                    name: state.clientSelected.name,
                    lastname: state.clientSelected.lastname,
                },
                products: addProducts()
            }
            postSale(sale);
        }
    }

    const addProducts = () => {
        let products = [];
        products = state.sales.map((item) => {
            return {
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity
            }
        })
        return products;
    }

    const handlerDeleteOne = (e) => {
        const index = parseFloat(e.target.dataset.index);
        let sales = state.sales;
        let filteredSales = sales.filter((sale, indexSale) => {
            return indexSale !== index
        })
        dispatch({ type: 'DELETE_ONE', data: filteredSales });
    }

    const fetchClients = () => {
        fetch('http://localhost:3000/clients')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_CLIENTS', data: response }));
    }

    const fetchProducts = () => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_PRODUCTS', data: response }));
    }

    const fetchEmployees = () => {
        fetch('http://localhost:3000/employees')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_EMPLOYEES', data: response }));
    }

    const postSale = async (sale) => {
        const response = await fetch('http://localhost:3000/sales', {
            method: 'POST',
            body: JSON.stringify(sale),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        console.log(res);
        dispatch({ type: 'SET_POST_RESPONSE', data: res });
    }

    const toggleBill = () => {
        handlerDeleteAll();
        dispatch({ type: 'PRINT_BILL' });
    }

    return (
        <div className='container mt-3 animation-show'>
            {state.printBill ?
                <div>
                    <Bill
                        ref={componentRef}
                        dataToPrint={state.postSaleResponse}
                    />
                    <ReactToPrint
                        trigger={() => <button className='btn btn-secondary mt-3 mr-1'>Imprimir factura</button>}
                        content={() => componentRef.current}
                    />
                    <button
                        className='btn btn-secondary mt-3'
                        onClick={toggleBill}
                    >Nueva compra</button>
                </div>
                :
                <div>
                    <NewSale
                        loadSale={handlerNewSale}
                        deleteAll={handlerDeleteAll}
                        clients={state.clients}
                        products={state.products}
                        employees={state.employees}
                    />
                    <SalesCart
                        sales={state.sales}
                        deleteAll={handlerDeleteAll}
                        deleteOne={handlerDeleteOne}
                        confirmSale={handlerConfirmSale}
                        totalAmount={state.totalAmount}
                    />
                </div>
            }
        </div>
    )
}

export default Sales;