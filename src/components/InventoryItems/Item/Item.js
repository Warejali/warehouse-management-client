import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ items }) => {
    const { _id, name, price, img, seller, description, quantity } = items;
    const navigate = useNavigate()

    const goToUpdate = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div>
            <div className="col item-card">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <div className='d-flex justify-content-around'>
                            <p className="card-text fw-bold text-warning">Price: {price}USD</p>
                            <p className="card-text fw-bold">Supplier: {seller}</p>
                        </div>
                    </div>
                    <div className="item-btn secondary-color text-white d-flex justify-content-around py-2">
                        <button className='btn'><h6 className=''> QUANTITY: {quantity}</h6></button>
                        <button onClick={() => goToUpdate(_id)} className='update-btn'><h6 className=''>UPDATE NOW</h6></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;