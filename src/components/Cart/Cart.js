import React from 'react';

const Cart = (props) => {
    let cart=props.cart;
    const total=cart.reduce((total,prd) => total+prd.price,0)

    let shpping=0;
    if(total>35){
        shpping=5.55;
    }
    else if(total>15){
        shpping=3.55;
    }
    else if(total>5){
        shpping=0;
    }
    let tax=total/10;

    const fixedNumber = num =>{
        const precision=num.toFixed(2);
        return precision
    }
    let grantTotall=total+shpping+tax;
    return (
        <div className="cart_class">
            <h4>Order Summary</h4>
            <p><small>iteams order:{cart.length}</small></p>
            <p><small>shpping cost:{shpping}</small></p>
            <p><small>vat/tax:{fixedNumber(tax)}</small></p>
            <p><small>total before shipping & tax:{fixedNumber(total)}</small></p>
            <p><small>Order Total:${fixedNumber(grantTotall)}</small></p>
            <button className="main_buttons">Riview Your Order</button>

        </div>
    );
};

export default Cart;