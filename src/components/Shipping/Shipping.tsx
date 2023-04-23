import classes from './Shipping.module.css'

export default function Shipping(){
    return(
        <div className={classes.container}>
            <div className={classes.articleContainer}>
                <img src='\images\fast-delivery-icon.webp'></img>
                <article className={classes.textcontainer}>
                    <h1>FREE AND FAST SHIPPING</h1>
                    <p>Expect a 5-star service from Singapore's best guitar shop. All goods are carefully inspected and are covered by warranty unless clearly stated otherwise. Enjoy free shipping rates and the most reliable delivery service both locally and internationally.</p>
                    <button className={classes.button} style={{marginTop: '1rem'}}>Learn more</button>
                </article>
            </div>
        </div>
    )
};
