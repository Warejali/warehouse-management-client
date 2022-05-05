import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../../hooks/useItems';

const ManageItem = ({product}) => {
    const { name, description, price, quantity } = product;
    const navigate = useNavigate()
    const [newQuantity, setQuantity] = useState([])
    const [products, setProducts] = useItems()

    const goToUpdate = id => {
        navigate(`/update/${id}`);
    }

    const updateQuantity = () => {
        console.log('Clicked');
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }


    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    toast("Product has been deleted")
                })
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='row row-cols-6 my-3 border mx-auto'>
                    <div className="">
                        <img className='img-thumbnail' src={product.img} alt="" />
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <h5>{name}</h5>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center alert-secondary">
                        <p>{description}</p>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <p>{price} USD</p>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center alert-secondary">
                        <h6>Quantity: {quantity}</h6>
                    </div>
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                        <div className='mb-3'>
                            <button onClick={updateQuantity()} type="button" class="btn btn-light">Ship Now</button>
                        </div>
                        <div>
                            <button onClick={() => goToUpdate(product._id)} type="button" class="btn btn-light me-2">Edit</button>
                            <button onClick={() => handleDelete(product._id)} type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;