import { db } from "../db.js";

export const getCart = async (req,res) => {
    try{
        const uid = await req.params.uid
        const q = ''
    } catch (err){
        res.send(err)
    }
}

export const addToCart = async (req,res) => {
    try{
        const {uid, pid, quantity} = req.body;
        const q = 'INSERT INTO cart (uid, product_id,quantity) VALUES ($1, $2, $3) ON CONFLICT (uid, product_id) DO UPDATE SET quantity = cart.quantity + $3';
        const values = [uid, pid, quantity];
        const result = await db.query(q, values)
        console.log(result)
        return res.json('added')
    } catch (err){
        res.send(err)
        console.log(err)
    }
}

