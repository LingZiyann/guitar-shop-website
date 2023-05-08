import { db } from "../db.js";

export const getProducts = async (req,res) => {
    try {
    const q = 'SELECT * FROM products';
    const results = await db.query(q);
    return res.json(results.rows)
    } catch (err){
        res.send(err);
    };
};

export const getProductsByid = async (req,res) => {
    try{
        const ids = req.body.ids;
        const placeholders = ids.map((id, index) => `$${index + 1}`).join(',');
        const q = `SELECT * FROM products WHERE product_id IN (${placeholders})`;
        const results = await db.query(q, ids);
        res.json(results.rows);
    } catch (err){
        res.status(500).send(err);
        console.log(err)
    };
};