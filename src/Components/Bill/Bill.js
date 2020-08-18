import React from 'react';

class Bill extends React.Component {
    componentDidUpdate(){
        console.log(this.props.dataToPrint)
    }
    render() {
        const { dataToPrint } = this.props;
        return (
            <div
                className='container mt-5 animation-show'
                style={{
                    border: '1px dotted black',
                    padding: '2em 2em',
                    borderRadius: '0.5em'
                }}
            >
                <div className='row'>
                    <div className='col-12 mb-4'>
                        <h1>Integra Media</h1>
                    </div>
                    <div
                        className='col-12 text-left'
                        style={{
                            padding: '0 30px'
                        }}
                    >
                        <form>
                            <div className='form-row'>
                                <div className='form-group col-md-3'>
                                    <label>Empleado:</label>
                                    <input
                                        readOnly
                                        type='text'
                                        className='form-control'
                                        value={`${dataToPrint.employee.name} ${dataToPrint.employee.lastname}`}
                                    />
                                </div>
                                <div className='form-group col-md-3'>
                                    <label>ID:</label>
                                    <input
                                        readOnly
                                        type='text'
                                        className='form-control'
                                        value={dataToPrint.employee.idNumber}
                                    />
                                </div>
                                <div className='form-group col-md-3'>
                                    <label>Cliente:</label>
                                    <input
                                        readOnly
                                        type='text'
                                        className='form-control'
                                        value={`${dataToPrint.client.name} ${dataToPrint.client.lastname}`}
                                    />
                                </div>
                                <div className='form-group col-md-3'>
                                    <label>Fecha:</label>
                                    <input
                                        readOnly
                                        type='text'
                                        className='form-control'
                                        value={dataToPrint.date}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <div className='table-responsive table-sm col-12 table-height'>
                            <table className='table table-bordered'>
                                <thead className='thead-light'>
                                    <tr>
                                        <th scope='col'></th>
                                        <th scope='col'>Producto</th>
                                        <th scope='col'>Cantidad</th>
                                        <th scope='col'>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataToPrint.products.map((item, index) => {
                                        return (
                                            <tr key={index}
                                                className='animation-show table-alignment'
                                            >
                                                <th scope='row'>{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{'$ ' + item.price * item.quantity}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className='d-flex justify-content-end mb-2'>
                                <h4>Total: </h4>
                                <div
                                    style={{ width: '20%' }}
                                    className='ml-2'
                                >
                                    <input
                                        type='text'
                                        className='form-control text-right'
                                        name='totalAmount'
                                        value={'$ ' + dataToPrint.totalAmount}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bill;