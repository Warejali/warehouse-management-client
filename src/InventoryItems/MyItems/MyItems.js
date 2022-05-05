import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user?.email
        const getMyItems = async () => {
            const url = `http://localhost:5000/items?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
        }
        getMyItems()
    }, [user])

    const goToUpdate = id =>{
        navigate(`/update/${id}`);
    }


    const handleDelete = (id) =>{
        const proceed = window.confirm('Are You sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(product => product._id !== id);
                setItems(remaining);
                toast("Product has been deleted")
            })
        }
    }

    return (
        <div>
            <h2>Manage product</h2>
            {
                items.map(item =>
                    <div className='container'>
                        <div className='row row-cols-6 my-3 border mx-auto'>
                            <div className="">
                                <img className='img-thumbnail' src={item.img} alt="" />
                            </div>
                            <div className=" d-flex justify-content-center align-items-center">
                                <h5>{item.name}</h5>
                            </div>
                            <div className=" d-flex justify-content-center align-items-center alert-secondary">
                                <p>{item.description}</p>
                            </div>
                            <div className=" d-flex justify-content-center align-items-center">
                                <p>{item.price} USD</p>
                            </div>
                            <div className=" d-flex justify-content-center align-items-center alert-secondary">
                                <h6>Quantity: {item.quantity}</h6>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center">
                                <div className='mb-3'>
                                    <button type="button" class="btn btn-light">Ship Now</button>
                                </div>
                                <div>
                                    <button onClick={() => goToUpdate(item._id)} type="button" class="btn btn-light me-2">Edit</button>
                                    <button onClick={() => handleDelete(item._id)} type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyItems;