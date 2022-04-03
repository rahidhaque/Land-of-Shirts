import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1. Element Variable
    // 2. ternary operator condition ? true : false   
    // 3. && Operator (shorthand)

    let command;
    if (cart.length === 0) {
        command = <p>Please Add Some Items</p>
    }
    else if (cart.length === 1) {
        command = <p><small>Thanks For Adding Item</small></p>
    }
    else {
        command = <p><small>Thanks For Adding Items</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length <= 3 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange-background'>Review Order</button>}
        </div>
    );
};

export default Cart;