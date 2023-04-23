import { useContext, useState } from 'react';
import classes from './Card.module.css'
import { faL } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/cart-context';

interface Cardprops{
    imgUrl: string;
    name: string;
    price: number
}

function Card (props: Cardprops){
    const context = useContext(CartContext)
    const [isHovering, setIsHovering] = useState(false)
    function mouseOver (){
        setIsHovering(true)
    }
    function mouseOut(){
        setIsHovering(false)
    }
    function addToCart (){
        context.addToCart(props.name)
        context.openCart()
    }

    return(
        <div className={classes.Card} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
                <img className={classes.img} src={props.imgUrl}></img>
                <div>{props.name}</div>
                <h2 style={{fontSize:'1rem'}}>{`$` + props.price}</h2>
                { isHovering && <button className={classes.button} onClick={addToCart}>Add to cart</button>}
        </div>
    )
}

export default Card;