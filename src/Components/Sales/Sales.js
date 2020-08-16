import React, { useReducer, useEffect } from 'react';
import SalesCart from '../SalesCart/SalesCart';
import NewSale from '../NewSale/NewSale';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SALE':
            return {
                sales: [
                    ...state.sales,
                    action.data
                ]
            }
        case 'DELETE_ALL':
            return {
                sales: []
            }
        case 'DELETE_ONE':
            return {
                sales: action.data
            }
        case 'SET_TOTAL':
            return {
                ...state,
                totalAmount: action.data
            }
        default:
            return state
    }
}

const Sales = () => {
    const [state, dispatch] = useReducer(reducer, {
        sales: [],
        totalAmount: 0
    });

    useEffect(() => {
        let add = 0;
        for (let i = 0; i < state.sales.length; i++) {
            add += state.sales[i].totalAmount
        }
        dispatch({ type: 'SET_TOTAL', data: add });
    }, [state.sales]);

    const handlerNewSale = (sale) => {
        dispatch({ type: 'SET_SALE', data: sale });
    }

    const handlerDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' });
    }

    const handlerConfirmSale = () => {
        alert('Estás seguro que deseas confirmar la compra?')
        console.log(state.sales);
    }

    const handlerDeleteOne = (e) => {
        const index = parseFloat(e.target.dataset.index);
        let sales = state.sales;
        let filteredSales = sales.filter((sale, indexSale) => {
            return indexSale !== index
        })
        dispatch({ type: 'DELETE_ONE', data: filteredSales });
    }

    return (
        <div className='container mt-3 animation-show'>
            <NewSale loadSale={handlerNewSale} />
            <SalesCart
                sales={state.sales}
                deleteAll={handlerDeleteAll}
                deleteOne={handlerDeleteOne}
                confirmSale={handlerConfirmSale}
                totalAmount={state.totalAmount}
            />
        </div>
    )
}

export default Sales;