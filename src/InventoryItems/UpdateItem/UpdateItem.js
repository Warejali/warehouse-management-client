import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetails from '../../hooks/useItemDetails';
import './UpdateItem.css'

const UpdateItem = () => {
    const { id } = useParams();
    const [items] = useItemDetails(id);
    const { name, price, img, description, seller, quantity } = items;
    const navigate = useNavigate()
 

    // const [product, setProduct] = useState({});
    // useEffect(() => {
    //     const url = `http://localhost:5000/product/${id}`;
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data))
    // },[])

    const onSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const seller = event.target.seller.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const quantity = event.target.quantity.value;
        const updateProduct = { name, description, seller, price, img, quantity };

        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('The Product has been updated');
                event.target.reset()
            })     
    }

    return (
        <div className='container'>
            <div className='row h-100'>
                <div className='col-4 mx-auto my-5'>
                    <h2>Replace Blew info</h2>
                    <div class="card">
                        <img src={img} class="card-img-top img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description}</p>
                            <h5 class="card-title">Price: {price}</h5>
                            <h5 class="card-title">Quantity: {quantity}</h5>
                            <h5 class="card-title">Seller: {seller}</h5>
                        </div>
                    </div>

                </div>
                <div className='col-8 mx-auto register-form my-5'>
                    <h2>Replace Blew info</h2>
                    {name}
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input type="text" name="description" id="" placeholder='description' />
                        <input type="text" name="seller" id="" placeholder='seller' />
                        <input type="number" name="price" id="" placeholder='price' />
                        <input type="text" name="img" id="" placeholder='Photo URL' />
                        <input type="number" name="quantity" id="" placeholder='quantity' />
                        <input type="submit" value="Update products" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;