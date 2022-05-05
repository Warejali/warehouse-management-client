import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../hooks/useItems';
import Item from './Item/Item';

const InventoryItems = () => {
    const [items] = useItems();
    const navigate = useNavigate()

    const inventoriesHandle = () =>{
        navigate('manageproducts');
    }
    return (
        <div className='container'>
            <h1>Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    items.slice(0, 6).map(item => <Item key={item._id} items={item}></Item>)
                }
            </div>
            <div className='my-5 text-center'>
                <button onClick={inventoriesHandle} className='btn btn-success' type="submit">Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;