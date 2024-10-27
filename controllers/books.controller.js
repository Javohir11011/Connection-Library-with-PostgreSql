import pool from "../data/books.js"
import fs, { readFileSync } from "fs"
import path from "path"

const filePath = path.join(process.cwd(), ("controllers/user.txt"))

export async function createBook (req, res, next){
    try {
        const body = req.body;
        let user_id = await readFileSync(filePath, "utf-8");
        user_id = parseInt(user_id)
        const{title , author, publication_date, genre} = body
        const data = await pool.query(
            `INSERT INTO books (title, author, publication_date, genre, user_id) 
            VALUES($1, $2, $3, $4, $5)`, [title, author, publication_date,genre, user_id]
        )
        res.status(200).send({
            status :"Ok",
            malumotlar : data.rows
        });
    } catch (error) {
       next(error) 
    }
}
export async function getAllBooks (req, res, next){
    try {
        const data = await pool.query("SELECT * FROM books");
        res.status(200).send({
            status :"Ok",
            malumotlar : data.rows
        });
    } catch (error) {
       next(error) 
    }
}
export async function getByIdBooks (req, res, next){
    try {
        const body_id = parseInt(req.params.id)
        const getId = await pool.query("SELECT * FROM books WHERE id = $1", [body_id]);
        res.status(200).send({
            status :"Ok",
            malumotlar : getId.rows
        });
    } catch (error) {
       next(error) 
    }
}



export async function updateBook (req, res, next){
    try {
        const body = req.body;
        // let user_id = await readFileSync(filePath, "utf-8");
        let id = parseInt(req.params.id)
        const updatedata = await pool.query(`UPDATE books
        set title = $1
        where id = $2`, [body, id])
        res.status(200).send({
            status :"Ok",
            malumotlar : "Update boldi..."
        });
    } catch (error) {
       next(error) 
    }
}

export async function deleteBook (req, res, next){
    try {
        let id = parseInt(req.params.id)
        const updatedata = await pool.query(`
            delete from books
            where id = $1`, [id])
        res.status(200).send({
            status :"Ok",
            malumotlar : "Delete boldi..."
        });
    } catch (error) {
       next(error) 
    }
}