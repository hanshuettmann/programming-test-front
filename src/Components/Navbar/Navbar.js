import React from 'react';
import './Navbar.css';
import Logo from './../../Resources/IntegraLogo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
                <img
                    src={Logo}
                    className="d-inline-block align-top nav-logo"
                    alt=""
                />
                Integra Media
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="navbar-nav">
                    <div className="nav-item nav-link">Inicio<span className="sr-only">(current)</span></div>
                    <div className="nav-item nav-link">Ventas</div>
                    <div className="nav-item nav-link">Productos</div>
                    <div className="nav-item nav-link">Clientes</div>
                    <div className="nav-item nav-link">Empleados</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;