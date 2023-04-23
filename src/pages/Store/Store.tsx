import classes from './Store.module.css'
import Storecomponent from '../../components/Storecomponent/Storecomponent';

function Store(){
    return(
        <div className={classes.container}>
            <Storecomponent/>
        </div>
        
    )
};

export default Store;