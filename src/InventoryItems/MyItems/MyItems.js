import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user?.email
        const getMyItems = async () => {
            const url = `http://localhost:5000/items?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setItems(data)
            }
            catch (error) {
                if (error.response.status === 401) {
                    <Loading></Loading>
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyItems()
    }, [user])

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
                    <div>
                        <div className='row my-3 border mx-auto container'>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <img className='img-thumbnail' src={item.img} alt="" />
                            </div>
                            <div className=" col-2 d-flex justify-content-center align-items-center">
                                <h6>{item.name}</h6>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center alert-secondary">
                                <p>{item.id}</p>
                            </div>
                            <div className="col-1 d-flex justify-content-center align-items-center">
                                <p>{item.price} USD</p>
                            </div>
                            <div className=" col-2 d-flex justify-content-center align-items-center alert-secondary">
                                <h6>Quantity: {item.quantity}</h6>
                            </div>
                            <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    <button type="button" className="btn btn-light">Ship Now</button>
                                    <button onClick={() => goToUpdate(item._id)} type="button" className="btn btn-light me-2">Edit</button>
                                    <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-danger">Delete</button>
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