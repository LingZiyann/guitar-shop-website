import classes from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/cart-context';
import { useContext, useEffect, useRef, useState } from 'react';
import data from '../../dummydata/data.json'

type cartItem = {
    id: string
    quantity: number
}

export default function Cart(){
    const context = useContext(CartContext);
    let cartArray = context.cartArray
    let isOpen = context.isOpen;
    function removeItem (id: string){
        context.removeFromCart(id)
    }

    

    return(
        <div className={isOpen ? `${classes.cartContainer} ${classes.open}` : classes.cartContainer}>
            <button className={classes.closebutton} onClick={context.closeCart} tabIndex={0} aria-label='close cart button'><FontAwesomeIcon icon={faX} aria-hidden='true' color='black'/></button>
            <h1 style={{color: 'black', fontWeight:'400', marginLeft:'1rem'}}>Cart</h1>
            {cartArray.map(item => (
                <div className={classes.itemContainer} key={item.id}>
                    <img src={(data.find( data => data.id === item.id))?.imgUrl} alt={(data.find( data => data.id === item.id))?.id}></img>
                    <div className={classes.textContainer}>
                        <div className={classes.title}>
                            <h1>{(data.find( data => data.id === item.id))?.id}</h1>
                            <h2>{'x' + item.quantity}</h2>
                        </div>
                        <div className={classes.price}>
                            <h2>{'$' + (data.find( data => data.id === item.id))?.price! * item.quantity}</h2>
                        </div>
                    </div>
                        <button tabIndex={0} className={classes.removebutton} onClick={() => removeItem(item.id)} aria-label='remove from cart button'><FontAwesomeIcon icon={faX} aria-hidden='true' color='darkred' fontSize='1rem'/></button>
                </div>
            ))}
        </div>
    )
}