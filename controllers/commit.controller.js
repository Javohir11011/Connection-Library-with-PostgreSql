import { isUtf8 } from "buffer"
import pool from "../data/books.js"
import fs, { readFileSync } from  "fs"
import path  from "path"
const filePath = path.join(process.cwd(), ("controllers/user.txt"))

export async function booksCommmet(req, res, next) {
    try {
        const bookId = parseInt(req.params.id);
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: "Comment text is required" });
        }
        const idData = await pool.query(`SELECT id FROM books WHERE id=$1`, [
            bookId,
        ]);
        if (idData.rowCount === 0) {
            return res.status(404).json({ error: "Book not found" });
        }
        const userId = fs.readFileSync(filePath, "utf-8");
        await pool.query(
            `INSERT INTO comments (text, book_id, user_id) VALUES ($1, $2, $3)`,
            [text, bookId, userId]
        );

        res.status(201).json({ message: "Comment added successfully" });
    } catch (error) {
        next(error);
    }
}

export async function booksReadComment(req, res, next) {
    try {
        let id = req.params.id;
        const data = await pool.query(
            `SELECT * FROM comments WHERE book_id = $1`,
            [parseInt(id)]
        );
        res.status(200).send(data.rows);

    } catch (error) {
        next(error)
    }
}