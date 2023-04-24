import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/cart-context'
import Cart from '../Cart/Cart'
import { useContext, useState } from 'react'

function Navbar(){
    // const [isOpen, setIsOpen] = useState<boolean>(false)
    // const openCart = (): void => {
    //     isOpen ? setIsOpen(false) : setIsOpen(true);
    // };

    const context = useContext(CartContext)

    return (
        <nav className={classes.nav}>
            <NavLink to="/" style={{textDecoration: 'none', color:'inherit'}}><h1 style={{fontWeight: 400}} className={classes.logo}>GuitarShop</h1></NavLink>
            <ul>
                <li><NavLink to={{pathname: '/'}} style={{textDecoration: 'none', color:'inherit'}}>Deals</NavLink></li>
                <li><NavLink to="/store" style={{textDecoration: 'none', color:'inherit'}}>Products</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}}>About</NavLink></li>
                <li><NavLink to="/" style={{textDecoration: 'none', color:'inherit'}}>Contact</NavLink></li>
                <button className={classes.button} onClick={context.openCart}><FontAwesomeIcon icon={faCartShopping} color='white'/></button>
                <Cart></Cart>
            </ul>

        </nav>
    )
}

export default Navbar;