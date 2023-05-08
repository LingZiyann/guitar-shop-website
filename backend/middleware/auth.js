import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const auth = async(req,res,next) => {
    try{
        const token = req.cookies.zyzytoken;
        if (!token){
            return res.json('Not verified!');
        };
        const decoded = jwt.verify(token, 'secretkey');
        const username = decoded.id;
        const q = "SELECT uid FROM users where name = $1"
        const result = await db.query(q, [username])
        console.log(result.rows[0].uid)
        req.uid = result.rows[0].uid;
        next();
    } catch(err){
        console.log(err);
        return res.send(err);
    }
}