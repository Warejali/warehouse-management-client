import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ items }) => {
    const {_id, name, price, img, seller, description, quantity } = items;
    const navigate = useNavigate()

    const goToUpdate = id =>{
    navigate(`/inventory/${id}`);
}

        return (
            <div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => goToUpdate(_id)} className='btn'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Item;