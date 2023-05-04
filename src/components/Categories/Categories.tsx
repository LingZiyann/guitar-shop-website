import classes from './Categories.module.css'
import { NavLink } from 'react-router-dom'

export default function Categories(){
    return(
        <div className={classes.categoriesContainer}>
            <NavLink to="/" className={classes.NavLink} style={{flex: '1'}} aria-label='Go to list of acoustic guitars'> 
                <div className={classes.card}>  
                    <img src='./images/categories/D28-ipad 2.jpg' aria-hidden="true"></img>
                    <h1 className={classes.title}>Acoustic</h1>
                </div>      
            </NavLink> 
            <NavLink to="/" className={classes.NavLink} style={{flex: '1'}} aria-label='Go to list of bass guitars'> 
            <div className={classes.card}>
                <img src='./images/categories/224255582ebf28046351753c9b1ea355.jpg' aria-hidden="true"></img>
                <h1 className={classes.title}>Bass</h1>
            </div>
            </NavLink>
            <NavLink to="/" className={classes.NavLink} style={{flex: '1'}} aria-label='Go to list of electric guitars'> 
            <div className={classes.card}>
                <img src='./images/categories/fender-guitars-music-stratocaster-wallpaper-preview.jpg' aria-hidden="true"></img>
                <h1 className={classes.title}>Electric</h1>
            </div>
            </NavLink>
            <NavLink to="/" className={classes.NavLink} style={{flex: '1'}} aria-label='Go to list of ukeleles'> 
            <div className={classes.card}>
                <img src='./images/categories/guitar-theme-vertical-top-view-acoustic-ukulele-guitars-lying-each-other_386167-8490.avif' aria-hidden="true"></img>
                <h1 className={classes.title}>Ukelele</h1>
            </div>
            </NavLink>
        </div>
    )
}