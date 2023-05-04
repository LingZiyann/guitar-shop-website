import classes from './Home.module.css'
import Featured from '../../components/Featured/Featured';
import NewArrival from '../../components/NewArrivals/NewArrivals';
import Categories from '../../components/Categories/Categories';
import Shipping from '../../components/Shipping/Shipping';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';

function Home(){
    return(
        <div className={classes.homecontainer}>
            <div className={classes.imgcontainer}>
                <div className={classes.title}>
                    <h1 style={{color: '#D32D41'}}>Crafted to perfection</h1>
                    <h2 style={{color: '#D32D41'}}>Craftsmanship, playability and sophisicated tone-Taylor 414ce is now here</h2>
                    <NavLink to='/store' style={{textDecoration: 'none', color:'inherit'}} tabIndex={0} aria-label='Go to shopping list'><button className={classes.button} tabIndex={-1}>Shop now</button></NavLink>
                </div>
                <img className={classes.img} src="./images/kvVDoai.jpg" alt='image of taylor 414 ce'></img>
            </div>
            <section className={classes.container1}>
            <Featured></Featured>
            <NewArrival></NewArrival>
            </section>
            <Categories></Categories>
            <Shipping></Shipping>
            <Footer></Footer>
        </div>
    )
};

export default Home;