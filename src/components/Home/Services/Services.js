import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='container'>
            <h2 className='section-heading py-4'>OUR SERVICES</h2>
            <div className="row row-cols-1 row-cols-md-2 g-5">
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center service-card p-3">
                        <div className='image-icon my-2'>
                            <img className=' p-3' src="https://i.ibb.co/xHJz074/track.png" alt="" />
                        </div>
                        <div className="ms-5">
                            <h5 className="card-title">GROUND TRANSPORT</h5>
                            <p className="card-text">Transport began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center service-card p-3">
                        <div className='image-icon my-2'>
                            <img className='p-3' src="https://i.ibb.co/ZMMJMb1/icon-2.png" alt="" />
                        </div>
                        <div className="ms-5">
                            <h5 className="card-title">GROUND TRANSPORT</h5>
                            <p className="card-text">Transport began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center service-card p-3">
                        <div className='image-icon my-2'>
                            <img className='p-3' src="https://i.ibb.co/dfkMGsz/icon-3.png" alt="" />
                        </div>
                        <div className="ms-5">
                            <h5 className="card-title">GROUND TRANSPORT</h5>
                            <p className="card-text">Transport began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center service-card p-3">
                        <div className='image-icon my-2'>
                            <img className='p-3' src="https://i.ibb.co/R6t4dDG/icon-4.png" alt="" />
                        </div>
                        <div className="ms-5">
                            <h5 className="card-title">GROUND TRANSPORT</h5>
                            <p className="card-text">Transport began providing transportation solutions to Transport’s contract warehousing customers in the 1980s.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;