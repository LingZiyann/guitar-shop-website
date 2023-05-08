import { db } from "../db.js";

export const getCart = async (req,res) => {
    try{
        const uid = req.uid;
        const q = 'SELECT * FROM cart INNER JOIN products ON cart.product_id = products.product_id WHERE uid = $1';
        const values = [uid];
        const result = await db.query(q, values);
        console.log(result);
        return res.status(201).send(result.rows);
    } catch (err){
        console.log(err)
        res.send(err);
    };
};

export const addToCart = async (req,res) => {
    try{
        const uid = req.uid
        const { pid, quantity } = req.body;
        const q = 'INSERT INTO cart (uid, product_id,quantity) VALUES ($1, $2, $3) ON CONFLICT (uid, product_id) DO UPDATE SET quantity = cart.quantity + $3';
        const values = [uid, pid, quantity];
        const result = await db.query(q, values);
        console.log(result);
        return res.json('added');
    } catch (err){
        res.send(err);
        console.log(err);
    };
};

export const removeFromCart = async (req,res) => {
    try{
        const id = req.params.pid
        const q = 'DELETE FROM cart WHERE cart_id = $1';
        const values = [id];
        const results = await db.query(q, values);
        console.log(results);
        return res.json('removed');
    } catch (err){
        res.send(err);
    };
};
