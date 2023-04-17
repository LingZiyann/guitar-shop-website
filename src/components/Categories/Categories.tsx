import classes from './Categories.module.css'
import { NavLink } from 'react-router-dom'

export default function Categories(){
    return(
        <div className={classes.categoriesContainer}>
            <NavLink to="/aa" className={classes.NavLink} style={{flex: '1'}}> 
                <div className={classes.card}>  
                    <img src='public\images\categories\D28-ipad 2.jpg'></img>
                    <h1 className={classes.title}>Acoustic</h1>
                </div>      
            </NavLink> 
            <NavLink to="/aa" className={classes.NavLink} style={{flex: '1'}}> 
            <div className={classes.card}>
                <img src='public\images\categories\224255582ebf28046351753c9b1ea355.jpg'></img>
                <h1 className={classes.title}>Bass</h1>
            </div>
            </NavLink>
            <NavLink to="/aa" className={classes.NavLink} style={{flex: '1'}}> 
            <div className={classes.card}>
                <img src='public\images\categories\fender-guitars-music-stratocaster-wallpaper-preview.jpg'></img>
                <h1 className={classes.title}>Electric</h1>
            </div>
            </NavLink>
            <NavLink to="/aa" className={classes.NavLink} style={{flex: '1'}}> 
            <div className={classes.card}>
                <img src='public\images\categories\guitar-theme-vertical-top-view-acoustic-ukulele-guitars-lying-each-other_386167-8490.avif'></img>
                <h1 className={classes.title}>Ukelele</h1>
            </div>
            </NavLink>
        </div>
    )
}