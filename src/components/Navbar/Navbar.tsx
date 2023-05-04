import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/cart-context'
import Cart from '../Cart/Cart'
import { useContext, useEffect, useState, useRef } from 'react'

function Navbar(){
    // const [isOpen, setIsOpen] = useState<boolean>(false)
    // const openCart = (): void => {
    //     isOpen ? setIsOpen(false) : setIsOpen(true);
    // };

    const context = useContext(CartContext)
    const firstInteractiveElementRef = useRef(null)


    return (
        <nav className={classes.nav}>
            <NavLink to="/" style={{textDecoration: 'none', color:'inherit'}} aria-label="Go to the home page"><h1 style={{fontWeight: 400}} className={classes.logo}>GuitarShop</h1></NavLink>
            <ul>
                <li><NavLink to={{pathname: '/'}} style={{textDecoration: 'none', color:'inherit'}} role='button' aria-label="Go to the deals page">Deals</NavLink></li>
                <li><NavLink to="/store" style={{textDecoration: 'none', color:'inherit'}} role='button' aria-label="Go to the store page">Products</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}} role='button' aria-label="Go to the about page">About</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}} role='button' aria-label="Go to the contact page">Contact</NavLink></li>
                <button className={classes.button} onClick={context.openCart} aria-expanded={context.isOpen} aria-label='shopping cart'><FontAwesomeIcon icon={faCartShopping} color='white' aria-hidden='true'/></button>
                <Cart aria-hidden={!context.isOpen}></Cart>
            </ul>

        </nav>
    )
}

export default Navbar;