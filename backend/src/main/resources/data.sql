--Inserting sample user
INSERT INTO _USERS (username, password, email, full_name, profile_picture, bio, location, privacy_settings, role)
VALUES (
           'user@example.com',
           '$2a$10$ZuavTgJsGIUj9bS5aBv2NekETlRuAv/RcHykbqgAnlpy8STNCdvNO', -- Assuming this is the hashed password
           'user@example.com',
           'John Doe',
           'profile.jpg',
           'This is a short bio about the user.',
           'City, Country',
           'default',
           'USER'
       );


-- Inserting sample genres
INSERT INTO GENRES (name) VALUES ('Action');
INSERT INTO GENRES (name) VALUES ('Comedy');
INSERT INTO GENRES (name) VALUES ('Drama');
INSERT INTO GENRES (name) VALUES ('Sci-Fi');
INSERT INTO GENRES (name) VALUES ('Horror');

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

--Inserting sample exchanges
INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition)
VALUES (
           2, -- Assuming bookID1 is 2
           3, -- Assuming bookID2 is 3
           1, -- Assuming ownerID is 1
           '2023-12-01', -- Assuming exchangeDate is '2023-12-01'
           'Pending',
           'Good'
       );

