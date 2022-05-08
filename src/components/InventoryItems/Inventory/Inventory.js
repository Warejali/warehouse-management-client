import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetails from '../../../hooks/useItemDetails';

const Inventory = () => {
    const { id } = useParams();
    const [items] = useItemDetails(id);
    let { name, price, img, description, seller, quantity } = items;
    const navigate = useNavigate()


    const submitForm = event => {
        event.preventDefault();
        const addQuantity = event.target.addQuantity.value;
        let newQuantity = parseInt(addQuantity) + parseInt(quantity);
        quantity = newQuantity
        const updateQuantity = { quantity };

        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast(`${addQuantity} items has been added`);
                event.target.reset()
                navigate(`/`)
            })
    }
    const deliveredHandle = event => {
        let plusQuantity = parseInt(quantity) - 1;
        quantity = plusQuantity
        const updateQuantity = { quantity };

        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('1 item has been sent');
                event.target.reset()
            })
    }

    return (
        <div className='container my-5'>
            <h2 className='section-heading my-5'>Manage inventory</h2>
            <div className="d-flex">
                <div className='col-md-5'>
                    <img src={img} className="img-thumbnail p-3" alt="..." />
                </div>
                <div className="col-md-7 ms-5">
                    <h4 className="text-uppercase">{name}</h4>
                    <p className="">Supplier: {seller}</p>
                    <h5 className="text-warning">Price: {price}</h5>

                    <div>
                        <h5 className="">Quantity: {quantity}</h5>
                        <button onClick={() => deliveredHandle()} className='mt-2 button-style' type="submit">Delivered</button>
                    </div>

                    <div className='mt-5'>
                        <form onSubmit={submitForm}>
                            <p>Restock the items:</p>
                            <input type="number" name="addQuantity" id="" />
                            <input type="submit" value="Add" />
                        </form>
                    </div>
                    <div className="mt-5">
                        <h5>Description:</h5>
                        <p >{description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Inventory;