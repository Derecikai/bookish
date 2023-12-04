-- Inserting sample genres
INSERT INTO GENRES (name) VALUES ('Action');
INSERT INTO GENRES (name) VALUES ('Comedy');
INSERT INTO GENRES (name) VALUES ('Drama');
INSERT INTO GENRES (name) VALUES ('Sci-Fi');
INSERT INTO GENRES (name) VALUES ('Horror');

-- Inserting sample books
-- Inserting sample books
INSERT INTO BOOKS (title, author, genre_id, ISBN, description)
VALUES ('The Catcher in the Rye', 'J.D. Salinger', 1, '978-0-316-76948-0', 'A classic novel about teenage angst.');

INSERT INTO BOOKS (title, author, genre_id, ISBN, description)
VALUES ('To Kill a Mockingbird', 'Harper Lee', 3, '978-0-06-112008-4', 'A powerful exploration of racial injustice in the American South.');

INSERT INTO BOOKS (title, author, genre_id, ISBN, description)
VALUES ('1984', 'George Orwell', 4, '978-0-452-28423-4', 'A dystopian novel depicting a totalitarian regime.');

INSERT INTO BOOKS (title, author, genre_id, ISBN, description)
VALUES ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 2, '978-0-345-39180-3', 'A comedic science fiction series.');

INSERT INTO BOOKS (title, author, genre_id, ISBN, description)
VALUES ('The Shining', 'Stephen King', 5, '978-0-385-12167-5', 'A horror novel about a familys winter stay at an isolated hotel.');

