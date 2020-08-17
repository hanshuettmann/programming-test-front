import React from 'react';

const TableSpinner = () => {
    return (
        <tr className='animation-show'>
            <td colSpan='7'>
                <div className="d-flex align-items-center m-1 text-secondary">
                    <strong>Cargando...</strong>
                    <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
            </td>
        </tr>
    )
}

export default TableSpinner;