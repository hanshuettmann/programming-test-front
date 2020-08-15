import React, { useReducer } from 'react';
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

    const handlerNewSale = (sale) => {
        dispatch({ type: 'SET_SALE', data: sale });
        handlerTotalAmount(sale.totalAmount, false);
    }

    const handlerDeleteAll = () => {
        dispatch({ type: 'DELETE_ALL' });
        handlerTotalAmount(0, false);
    }

    const handlerConfirmSale = () => {
        alert('Estás seguro que deseas confirmar la compra?')
        console.log(state.sales);
    }

    const handlerTotalAmount = (lastValue, deleteOne) => {
        let total = 0;
        for (let i = 0; i < state.sales.length; i++) {
            total += state.sales[i].totalAmount
        }
        if (lastValue === 0) {
            total = 0;
        } else if (deleteOne) {
            total = lastValue
        } else {
            total = total + lastValue
        }
        console.log(total);
        dispatch({ type: 'SET_TOTAL', data: total });
    }

    const handlerDeleteOne = (e) => {
        const index = parseFloat(e.target.dataset.index);
        let sales = state.sales;
        let filteredSales = sales.filter((sale, indexSale) => {
            if (indexSale !== index) {
                return sale
            }
        })
        dispatch({ type: 'DELETE_ONE', data: filteredSales });
        
        let total = 0;
        for (let i = 0; i < filteredSales.length; i++) {
            total += filteredSales[i].totalAmount
        }
        handlerTotalAmount(total, true);
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