import React from 'react';

const Product = ({ product }) => {
    const { name, price, img, seller, description, quantity } = product;

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
                        <small className="text-muted">Update</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;