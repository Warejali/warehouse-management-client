import useProducts from '../hooks/useProducts';
import Product from './Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='container'>
            <h1>Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;