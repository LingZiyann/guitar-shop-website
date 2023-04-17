import classes from './Home.module.css'
import Featured from '../../components/Featured/Featured';
import NewArrival from '../../components/NewArrivals/NewArrivals';
import Categories from '../../components/Categories/Categories';
import Shipping from '../../components/Shipping/Shipping';
import Footer from '../../components/Footer/Footer';

function Home(){
    return(
        <div className={classes.homecontainer}>
            <div className={classes.title}>
                <h1>Crafted to perfection</h1>
                <h2>Craftsmanship, playability and sophisicated tone-Taylor 414ce is now here</h2>
                <button className={classes.button}>Shop now</button>
            </div>
            <div className={classes.imgcontainer}>
            <img className={classes.img} src="public\images\kvVDoai.jpg"></img>
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