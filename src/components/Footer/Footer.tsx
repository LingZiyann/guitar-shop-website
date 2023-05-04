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
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to about us section'><li>About us</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to careers section'><li>Careers</li></NavLink>
                </ul>
                
                <ul>
                    <h1>Customer Service</h1>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to contact us section'><li>Contact Us</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to q and a section'><li>Q&A</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to warranty section'><li>Warranty</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to repair service policy section'><li>Repair Service Policy</li></NavLink>
                </ul>
                
                <ul>
                    <h1>Products</h1>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to acoustic guitars section'><li>Acoustic Guitars</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to electric guitars section'><li>Electric Guitars</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to bass guitars section'><li>Bass Guitars</li></NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black'}} aria-label='go to ukeleles section'><li>Ukeleles</li></NavLink>
                </ul>
            </body>
        </section>
    )
};