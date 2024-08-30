import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategory(json))
            .catch(error => console.log(error));
    }, []);
       
   const clicked = (props) => {
        navigate("/Products", { state: { key: props } });
   };

    return (
        <>
            <p className='text-center m-8'>Select your Category....</p>
            <div className='flex flex-wrap justify-evenly font-bold hover:cursor-pointer'>
                {
                    category.map((product, index) => (
                        <div key={index}>
                            <h2 className='uppercase' onClick={() => clicked(product)}>
                                {product}
                            </h2>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
