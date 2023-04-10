import React, { useEffect, useState } from 'react';
import { getShoppingCart } from './utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const cart = useLoaderData()
    // console.log(cart)

    // const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     fetch('/jobs.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     const savedCart = [];
    //     // step 1: get id of the addedProduct
    //     for (const id in storedCart) {
    //         // step 2: get product from products state by using id
    //         const addedProduct = products.find(product => product.id === id)
    //         if (addedProduct) {
    //             // step 3: add quantity
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // step 4: add the added product to the saved cart
    //             savedCart.push(addedProduct);
    //         }
    //         // console.log('added Product', addedProduct)
    //     }
    //     // step 5: set the cart
    //     setCart(savedCart);
    // }, [products])

    return (
        <div>
            <h1 className='text-4xl text-center m-10 bg-gray-200 p-10'>Applied Jobs</h1>
            <div className='flex flex-col items-end max-w-xs'>
                <button className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Onsite</button>
                <button className='flex-grow font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Remote</button>
            </div>

            {
                cart.map(c => <AppliedJob
                    key={c.id}
                    c={c}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;