import React from 'react';
import ClientsForm from '../ClientsForm/ClientsForm';
import ClientsTable from '../ClientsTable/ClientsTable';

const Clients = () => {
    const handlerNewClient = (client) => {
        console.log(client)
    }

    return (
        <div className='mt-3 animation-show'>
            <ClientsForm loadClient={handlerNewClient} />
            <ClientsTable />
        </div>
    )
}

export default Clients;