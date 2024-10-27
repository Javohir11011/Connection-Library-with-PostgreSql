CREATE TABLE IF NOT EXISTS users (
            id serial PRIMARY KEY,
            username VARCHAR(20) UNIQUE,
            email VARCHAR(40),
            password VARCHAR(14),
            created_at TIMESTAMP DEFAULT current_timestamp
)

CREATE TABLE IF NOT EXISTS books (
            id serial PRIMARY KEY,
            title TEXT,
            author VARCHAR(20),
            publication_date DATE,
            genre VARCHAR(20),
            user_id INT,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )


SELECT * FROM users;
SELECT * FROM users WHERE name ILIKE '%$1%'


SELECT * FROM users;


INSERT INTO books (title, author, publication_date, genre, user_id) 
VALUES
()

UPDATE books
set title =  



INSERT INTO comments (text, book_id, user_id) VALUES
('Amazing storyline and characters!', 6, 1),
('A thought-provoking novel.', 4, 2),
('Orwell really captures the essence of dystopia.', 3, 3),
('A timeless romance.', 4, 4);

SELECT * FROM comments;


SELECT * FROM comments
-- WHERE book_id = 