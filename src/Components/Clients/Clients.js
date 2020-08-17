import React, { useReducer, useEffect } from 'react';
import ClientsForm from '../ClientsForm/ClientsForm';
import ClientsTable from '../ClientsTable/ClientsTable';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLIENTS':
            return {
                clients: action.data,
                hasFetch: true
            }
        default:
            return state
    }
}

const Clients = () => {
    const [state, dispatch] = useReducer(reducer, {
        clients: [],
        hasFetch: false
    });

    useEffect(() => {
        fetchClients();
    }, [])

    const handlerNewClient = async (client) => {
        const response = await fetch('http://localhost:3000/clients', {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        console.log(res);
        fetchClients();
    }

    const fetchClients = () => {
        fetch('http://localhost:3000/clients')
            .then(res => res.json())
            .then(response => dispatch({ type: 'SET_CLIENTS', data: response }));
    }

    return (
        <div className='container mt-3 animation-show'>
            <ClientsForm loadClient={handlerNewClient} />
            <ClientsTable
                clients={state.clients}
                hasFetchClients={state.hasFetch}
            />
        </div>
    )
}

export default Clients;