import classes from './Featured.module.css';
import Card from '../Card/Card';

function Featured (){
    return(
        <div className={classes.featured}>
            <h1 className={classes.title}>Featured Guitars</h1>
            <hr></hr>
            <section className={classes.section}>
                <Card imgUrl='./images/guitarImg/products_2FT25-214-CE-DLX-LTD-TB_2FT25-214-CE-DLX-LTD-TB_1680572324050_158x158_crop_center.avif' name='Taylor 214ce' price={+2000}/>
                <Card imgUrl='./images/guitarImg/products_2FT25-224-CE-DLX-LTD-TR_2FT25-224-CE-DLX-LTD-TR_1680575530360_158x158_crop_center.avif' name='Taylor 224ce' price={+2500}/>
                <Card imgUrl='./images/guitarImg/products_2FT25-814CE-V-2020_2FT25-814CE-V-2020_1605086473710_158x158_crop_center.avif' name='Taylor 114ce' price={+700}/>
                <Card imgUrl='./images/guitarImg/products_2FT25-BBT_2FT25-BBT_1670233720810_158x158_crop_center.avif' name='Big baby Taylor' price={+800}/>
            </section>
        </div>
    )
};

export default Featured;