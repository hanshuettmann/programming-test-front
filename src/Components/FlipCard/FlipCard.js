import React from 'react';
import './FlipCard.css';
import HansPicture from './../../Resources/HansPicture.jpg';

const FlipCard = () => {
    return (    
            <div className='row justify-content-center mb-5'>
                <div className="col-12 col-sm-6 d-flex flex-column align-items-center">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    className="w-100 rounded-circle shadow p-1 mb-3 bg-light rounded"
                                    src={HansPicture}
                                    alt="Hans Hüttmann"
                                />
                            </div>
                            <div className="flip-card-back shadow">
                                <h1 className="lead"> Hans Hüttmann</h1>
                                <i className="fas fa-heartbeat fa-3x"></i>
                                <p>Ingeniero Biomédico, Universidad Nacional de Tucumán.
                                Desarrollador FullStack.
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="lead mt-1 card-name">Hans Hüttmann</p>
                    </div>
                </div>
            </div>
    )
}

export default FlipCard;