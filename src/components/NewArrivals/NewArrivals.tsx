import Card from "../Card/Card";
import classes from './NewArrival.module.css'

function NewArrival (){
    return(
        <div className={classes.featured}>
            <h1 className={classes.title}>New Arrivals</h1>
            <hr></hr>
            <section className={classes.section}>
                
                <Card imgUrl="./images/newarrivals/products_2FC20-OM2H-33229_2FC20-OM2H-33229_1680574480460_158x158_crop_bottom.avif" name='Collings OM2H' price={+8600}/>
                <Card imgUrl="./images/newarrivals/products_2FI01-RGB300-BKF_2FI01-RGB300-BKF_1680081139600_158x158_crop_bottom.webp" name='Ibanez RGB300' price={+450}/>
                <Card imgUrl="./images/newarrivals/products_2FJ08-280-2601-803_2FJ08-280-2601-803_1680060826200_158x158_crop_bottom.avif" name='Jackson SL3' price={+3700}/>
                <Card imgUrl="./images/newarrivals/productredguitar.avif" name='PRS CE24' price={+3200}/>
            </section>
        </div>
    )
}

export default NewArrival;