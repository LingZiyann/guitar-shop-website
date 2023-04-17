import classes from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

type Cartprops = {
    isOpen: boolean
    setIsOpen: () => void
}

export default function Cart(props: Cartprops){
    return(
        <div className={props.isOpen ? `${classes.cartContainer} ${classes.open}` : classes.cartContainer}>
             <button onClick={props.setIsOpen}><FontAwesomeIcon icon={faX} color='black'/></button>
            hi
        </div>
    )
}