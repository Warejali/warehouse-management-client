import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const MyItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user?.email
        const getMyItems = async () => {
            const url = `https://mymoon-warehouse.herokuapp.com/items?email=${email}`
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
            const url = `https://mymoon-warehouse.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                    toast("item has been deleted")
                })
        }
    }

    return (
        <div className='container'>
            <h2>Manage item</h2>
            {
                items.map(item =>
                    <div className='row my-4 border'>
                            <div className="col-md-2">
                                <img className=' item-img' src={item.img} alt="" />
                            </div>
                            <div className=" col-md-2 d-flex justify-content-center align-items-center secondary-color">
                                <h5>{item.name}</h5>
                            </div>
                            <div className=" col-md-2 d-flex justify-content-center align-items-center">
                                <p><small>{item.description}</small></p>
                            </div>
                            <div className="secondary-color col-md-1 d-flex justify-content-center align-items-center">
                                <p>{item.price} USD</p>
                            </div>
                            <div className="col-md-2 d-flex justify-content-center align-items-center">
                                <h6>Quantity: {item.quantity}</h6>
                            </div>
                            <div className="secondary-color col-md-3 d-flex justify-content-center align-items-center">
                                <div className=''>
                                    <button type="button" class="button-style">Delivery Now</button>
                                </div>
                                <div className='' >
                                    <button onClick={() => goToUpdate(item._id)} type="button" class=" mx-3 button-style ">Edit</button>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(item._id)} type="button" class="button-style btn-danger">Delete X</button>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>
    );
};

export default MyItems;