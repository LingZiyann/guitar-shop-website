import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'

export default function Footer (){
    return(
        <section className={classes.footerContainer}>
            <header className={classes.headerContainer}>
                <h1 className={classes.title}>Stay connected with us</h1>
                <hr></hr>
            </header>
            <body className={classes.bodyContainer}>
                
                <ul>
                    <h1>Company</h1>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>About us</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Careers</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li></li></NavLink>
                </ul>
                
                <ul>
                    <h1>Customer Service</h1>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Contact Us</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Q&A</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Warranty</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Repair Service Policy</li></NavLink>
                </ul>
                
                <ul>
                    <h1>Products</h1>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Acoustic Guitars</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Electric Guitars</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Bass Guitars</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}}><li>Ukeleles</li></NavLink>
                </ul>
            </body>
        </section>
    )
};