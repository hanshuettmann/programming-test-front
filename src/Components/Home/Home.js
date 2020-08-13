import React from 'react';
import FlipCard from '../FlipCard/FlipCard';

const Home = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center mt-4 mb-4'>
                <div className='col-12 col-md-8'>
                    <h1>Integra Media</h1>
                    <div className='mt-3'>
                        <p>Sistema de ventas desarrollado para el test de programación proporcionado por Juan Fuensalida el día 12 de Agosto de 2020.</p>
                        <p>Utilice la barra de navegación para desplazarse por la aplicación.</p>
                    </div>
                </div>
            </div>
            <FlipCard />
        </div>
    )
}

export default Home;