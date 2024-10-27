import pool from "../data/books.js"
import fs from "fs"
import path from "path"


const filePath = path.join(process.cwd(), ("controllers/user.txt"))
export async function getAllUsers (req, res, next){
    try {
        const data = await pool.query("SELECT * FROM users");
        res.status(200).send({
            status :"Ok",
            malumotlar : data.rows
        });
    } catch (error) {
       next(error) 
    }
}

export async function registerUsers (req, res, next){
    try {
        const body = req.body;
        const{username, email, password} = body
        const data = await pool.query(
            `INSERT INTO  users (username, email, password) 
            VALUES($1, $2, $3)`, [username, email, password]);
        res.status(200).send({
            status :"Ok",
            malumotlar : data.rows
        });
    } catch (error) {
       next(error) 
    }
}

export async function loginUser (req, res, next){
    try {
        const body = req.body
        const data = await pool.query(`SELECT * FROM users`);
        console.log(body);
        for(let i = 0; i < data.rows.length; i++){
            if(data.rows[i].email === body.email && data.rows[i].password === body.password){
                let result = data.rows[i].id
                fs.writeFileSync(filePath, JSON.stringify(result))
                return res.status(200).send({
                    status :"Ok",
                    malumotlar : "Tizimga kirdingiz..."
                })
            }
        }
        res.status(400).send("Error...");
    } catch (error) {
       next(error) 
    }
}

