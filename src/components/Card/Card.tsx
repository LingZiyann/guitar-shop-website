import classes from './Card.module.css'

interface Cardprops{
    imgUrl: string;
    name: string;
    price: number
}

function Card (props: Cardprops){
    return(
        <div className={classes.Card}>
                <img className={classes.img} src={props.imgUrl}></img>
                <h1>{props.name}</h1>
                <h2 style={{fontSize:'1rem'}}>{`$` + props.price}</h2>
        </div>
    )
}

export default Card;