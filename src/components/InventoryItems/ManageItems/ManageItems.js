import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../../hooks/useItems';
import './ManageItems.css'


const ManageItems = () => {
    const [products, setProducts] = useItems()

    const navigate = useNavigate()

    const goToUpdate = id => {
        navigate(`/update/${id}`);
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
        <div className='my-5 container mx-auto'>
            <h2 className='section-heading my-4'>Manage Items</h2>
            {
                products.map(product =>
                        <div className='row my-4 border'>
                            <div className="col-md-2">
                                <img className=' item-img' src={product.img} alt="" />
                            </div>
                            <div className=" col-md-2 d-flex justify-content-center align-items-center secondary-color">
                                <h5>{product.name}</h5>
                            </div>
                            <div className=" col-md-2 d-flex justify-content-center align-items-center">
                                <p><small>{product.description}</small></p>
                            </div>
                            <div className="secondary-color col-md-1 d-flex justify-content-center align-items-center">
                                <p>{product.price} USD</p>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center align-items-center">
                                <h6>Quantity: {product.quantity}</h6>
                            </div>
                            <div className="secondary-color col-md-3 d-flex justify-content-center align-items-center">
                                <div className=''>
                                    <button type="button" class="button-style">Delivery Now</button>
                                </div>
                                <div className='' >
                                    <button onClick={() => goToUpdate(product._id)} type="button" class=" mx-3 button-style ">Edit</button>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(product._id)} type="button" class="button-style btn-danger">Delete X</button>
                                </div>
                            </div>
                        </div>
                   
                )
            }
        </div>
    );
};

export default ManageItems;