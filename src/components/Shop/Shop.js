import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const frist10=fakeData.slice(0,10);
    const[product,setProduct]= useState(frist10);

    const[cart,setCart]=useState([]);

    const addProduct= (product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            
            <div className="product-container">
                {
                    product.map(pd => <Product addproduct={addProduct} product={pd} ></Product>)
                }
            </div>

            <div className="card-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;