import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../Context/UseContext';

export const Products = () => {
    const { container, setcontainer } = useContext(UserContext);
    const location = useLocation();
    const [products, setProducts] = useState([]);


    const click = (product) => {
        setcontainer([...container, product]);
    };



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${location.state.key}`)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching products:', error));
    }, [location.state.key]);

    return (
        <div className='flex flex-wrap justify-around'>
            {
                products.map((product, index) => (
                    <div key={index} className='border w-[500px] h-[400px] p-5 m-5 bg-slate-300 rounded flex flex-col justify-around relative'>
                        <div>
                            <img src={product.image} alt={product.title} width="100px" height="100px" className='m-auto' />
                        </div>
                        <div className='ml-4'>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating?.rate || 'No rating'}</p>
                            <div className='m-auto flex justify-center'>
                                <button className='font-semibold bg-sky-400 p-3 border rounded' onClick={() => click(product)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
