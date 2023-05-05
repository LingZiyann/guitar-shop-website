import { db } from "../db.js"

export const getProducts = async (req,res) => {
    try {
    const q = 'SELECT * FROM products';
    db.query(q, (err,data) => {
        if (err) {
            return res.json(err);
        } return res.json(data);
    });
    } catch (err){
        res.send(err)
    };
};

