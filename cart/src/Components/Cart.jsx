import React, { useContext } from 'react';
import { UserContext } from '../Context/UseContext';

export const Cart = () => {
    const { container, setcontainer } = useContext(UserContext);

    const removeItem = (index) => {
        const updatedContainer = container.filter((_, i) => i !== index); // Create a new array without the selected item
        setcontainer(updatedContainer); // Update the state with the new array
    };

    console.log(container);

    return (
        <>
            { container.length > 0 ?
                <div className='flex flex-wrap justify-around'>
                    {
                        container.map((product, index) => (
                            <div key={index} className='border w-[500px] h-[400px] p-5 m-5 bg-slate-300 rounded flex flex-col justify-around relative'>
                                <div>
                                    <img src={product.image} alt={product.title} width="100px" height="100px" className='m-auto' />
                                </div>
                                <div className='ml-4'>
                                    <h3>{product.title}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Rating: {product.rating?.rate || 'No rating'}</p>
                                    <div className='m-auto flex justify-center'>
                                        <button className='font-semibold bg-red-400 p-3 border rounded' onClick={() => removeItem(index)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                : <div className='text-center font-extrabold mt-52'>Nothing in the cart.</div>
            }
        </>
    );
};
