import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddNewItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email
    const onSubmit = data => {
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json()).then(result =>{
            console.log(result);
            
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>New Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4' value={email} {...register("email")} required/>
                <input className='mb-4' placeholder='Name' {...register("name")} />
                <input className='mb-4' placeholder='description' {...register("description")} />
                <input className='mb-4' placeholder='supplier' {...register("seller")} />
                <input className='mb-4' placeholder='Price' type="number" {...register("price")} required/>
                <input className='mb-4' placeholder='quantity' type="number" {...register("quantity")} required/>
                <input className='mb-4' placeholder='Photo URL' type="text" {...register("img")} required />
                <input type="submit" value= 'Add Product' />
            </form>
        </div>
    );
};

export default AddNewItems;