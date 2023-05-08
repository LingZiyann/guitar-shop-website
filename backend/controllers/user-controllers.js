import { db } from "../db.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


export const login = async (req,res) => {
    try{
        const { password , username } = req.body;
        const q = 'SELECT * FROM users WHERE name = $1';
        const result = await db.query(q, [username]);
        const storedPassword = result.rows[0].password;
        const isMatch = await bcrypt.compare( password, storedPassword )
        const token = jwt.sign({ id: username}, "secretkey")
        if (isMatch){
            return res.cookie("zyzytoken", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 3600000)
            }).status(200).json(result.rows[0])
        } else {
            const error = new Error('Wrong password or username')
            return res.json(error)
        }
    } catch (err){
        console.log(err)
        return res.send(err);
    };
};

export const signup = async (req,res) => {
    try {
    const { password, username } = req.body
    const q1 = 'SELECT * FROM users WHERE name = $1';
    const result = await db.query(q1, [username]);
    if (result.rows[0] && result.rows[0].uid){
        return res.status(409).json('This name is taken!');
    };
    const hashedPassword = await bcrypt.hash(password, 8);
    const q2 = 'INSERT INTO users (password, name) VALUES ($1, $2)';
    const values = [hashedPassword, username];
    const result2 = await db.query(q2, values);
    const token = jwt.sign({ id: username}, "secretkey")
    res.cookie("zyzytoken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000)
    }).status(200).json(result2.rows)
    } catch (err){
        console.log(err);
        return res.status(500).json(err);   
    };
};