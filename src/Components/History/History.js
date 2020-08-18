import React, { useEffect, useReducer } from 'react';
import HistoryTable from '../HistoryTable/HistoryTable';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SALES':
            return {
                sales: action.data,
                hasFetch: true
            }
        default:
            return state
    }
}

const History = () => {
    const [state, dispatch] = useReducer(reducer, {
        sales: [],
        hasFetch: false
    });

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = () => {
        fetch('http://localhost:3000/sales')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_SALES', data: response }));
    }

    return (
        <div className='container mt-3 animation-show'>
            <HistoryTable
                sales={state.sales}
                hasFetchSales={state.hasFetch}
            />
        </div>
    )
}

export default History;