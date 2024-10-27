import pool from "./books.js";

export const createTables = async () => {
  try {
    const tables = [
        `CREATE TABLE IF NOT EXISTS users (
            id serial PRIMARY KEY,
            username VARCHAR(20) UNIQUE,
            email VARCHAR(40),
            password VARCHAR(14),
            created_at TIMESTAMP DEFAULT current_timestamp
        )`,
        `CREATE TABLE IF NOT EXISTS books (
            id serial PRIMARY KEY,
            title TEXT,
            author VARCHAR(20),
            publication_date DATE,
            genre VARCHAR(20),
            user_id INT,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )`,
        `CREATE TABLE IF NOT EXISTS comments (
            id serial PRIMARY KEY,
            text TEXT,
            created_at TIMESTAMP DEFAULT current_timestamp,
            book_id INT,
            user_id INT,
            FOREIGN KEY (book_id) REFERENCES books(id),
            FOREIGN KEY (user_id) REFERENCES users(id)
        )`,
    ];

    for (let table of tables) {
      await pool.query(table);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
