import React from 'react';
import './Navbar.css';
import Logo from './../../Resources/IntegraLogo.png';
import { NavLink } from 'react-router-dom';

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
                    <NavLink exact to='/'><div className="nav-item nav-link navLink-item">Inicio<span className="sr-only">(current)</span></div></NavLink>
                    <NavLink to='/sales'><div className="nav-item nav-link">Ventas</div></NavLink>
                    <NavLink to='/products'><div className="nav-item nav-link">Productos</div></NavLink>
                    <NavLink to='/clients'><div className="nav-item nav-link">Clientes</div></NavLink>
                    <NavLink to='/employees'><div className="nav-item nav-link">Empleados</div></NavLink>
                    <NavLink to='/history'><div className="nav-item nav-link">Historial</div></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;