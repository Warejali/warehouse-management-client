import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';

const Inventory = () => {
    const { id } = useParams();
    const [items] = useItemDetails(id);
    let { name, price, img, description, seller, quantity } = items;
    const navigate = useNavigate()
    const [newQuantity, setNewQuantity] = useState([])
    
    const deliveredHandle = () =>{
        const remaining = quantity - 1;
        setNewQuantity(remaining)
        quantity = newQuantity
        console.log(quantity);
    }

    return (
        <div className='container'>
            <h2>Replace Blew info</h2>
            <div class="d-flex">
                <div className='col-md-5'>
                    <img src={img} class="img-thumbnail p-3" alt="..." />
                </div>
                <div class="col-md-7 ms-5">
                    <h3 class="text-uppercase">{name}</h3>
                    <p class="">{description}</p>
                    <h5 class="">Price: {price}</h5>
                    <h5 class="">Quantity: {quantity}</h5>
                    <h5 class="">Seller: {seller}</h5>
                    <p>Restock the items: <input type="number" name="" id="" /></p>
                    <div>
                        <button onClick={()=>deliveredHandle()} className='btn btn-success' type="submit">Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;