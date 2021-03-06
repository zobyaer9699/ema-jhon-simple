import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props)
    const{img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div className="image_area">
                <img src={img} alt="" />
            </div>
            <div className="product_area">
                  <h4 className="product-name">{name}</h4>
                  <p><small>by:{seller}</small></p>
                  <p>${price}</p>
                  <p><small>only {stock} in stock-order soon</small></p>
                  <button onClick={ ()=> props.addproduct(props.product)}  className="main_buttons"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;