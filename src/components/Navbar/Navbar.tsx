import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart'
import { useState } from 'react'

function Navbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openCart = (): void => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };


    return (
        <nav className={classes.nav}>
            <p>GuitarShop</p>
            <ul>
                <li><NavLink to="/aa" style={{textDecoration: 'none', color:'inherit'}}>Acoustic</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}}>Electric</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}}>Bass</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}}>Ukelele</NavLink></li>
                <button className={classes.button} onClick={openCart}><FontAwesomeIcon icon={faCartShopping} color='white'/></button>
                <Cart isOpen={isOpen} setIsOpen={openCart}></Cart>
            </ul>
                
        </nav>
    )
}

export default Navbar;