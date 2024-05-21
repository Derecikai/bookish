--Inserting sample user
INSERT INTO _USERS (username, password, email, full_name, profile_picture, bio, location, privacy_settings, role)
VALUES (
           'jogoat',
           '$2a$10$ZuavTgJsGIUj9bS5aBv2NekETlRuAv/RcHykbqgAnlpy8STNCdvNO', -- Assuming this is the hashed password
           'user@example.com',
           'John Doe',
           'https://cdn.dribbble.com/userupload/12140363/file/original-84dd24aae3fab58e1e06708a22f235e7.png?resize=900x900',
           'This is a short bio about the user.',
           'Timisoara',
           'default',
           'USER'
       );

INSERT INTO _USERS (username, password, email, full_name, profile_picture, bio, location, privacy_settings, role)
VALUES (
        'jogoat@gmail.com',
        '$2a$10$8mNAauzYAJbatkHAlmgfzOb.0biD5EDEqGQSYjRQJE5nUsLHzAxuq',
        'jogoat@gmail.com',
        'The Strongest Curse',
        'https://images.gamebanana.com/img/ico/sprays/65511af0a3500.png',
        'As Jogoat, the king of curses',
        'Arad',
        'default',
        'USER'
       );
INSERT INTO _USERS (username, password, email, full_name, profile_picture, bio, location, privacy_settings, role)
VALUES (
           'admin@yahoo.com',
           '$2a$10$BE0o4y9VgQX46ViwST7wpOBqRqLaIJVOPSUUbRzdq13rQ4m4TgU3C',
           'admin@yahoo.com',
           'admin',
           'https://liquipedia.net/commons/images/thumb/4/41/Brawl_Buzz.png/600px-Brawl_Buzz.png',
           'Buzz',
           'Timis',
           'default',
           'ADMIN'
       );
INSERT INTO _USERS (username, password, email, full_name, profile_picture, bio, location, privacy_settings, role)
VALUES (
           'user',
           '$2a$10$ZuavTgJsGIUj9bS5aBv2NekETlRuAv/RcHykbqgAnlpy8STNCdvNO', -- Assuming this is the hashed password
           'dan@yahoo.com',
            'Dan',
            'https://media.discordapp.net/attachments/416683307686952972/931885238920036352/received_378872517377713.jpeg?ex=66113dc2&is=65fec8c2&hm=bfe509d0273412bd1e1b556754ffa3ca15ba529f117abd58b9a1b97703371ba5&=&format=webp&width=376&height=670',
            'This is a short bio about the user.',
            'Timisoara',
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
INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('The Catcher in the Rye', 'J.D. Salinger', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg', 1, '978-0-316-76948-0', 'A classic novel about teenage angst.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('To Kill a Mockingbird', 'Harper Lee', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg', 3, '978-0-06-112008-4', 'A powerful exploration of racial injustice in the American South.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('1984', 'George Orwell', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg', 4, '978-0-452-28423-4', 'A dystopian novel depicting a totalitarian regime.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg', 2, '978-0-345-39180-3', 'A comedic science fiction series.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('Chainsaw Man vol. 12', 'Tatsuki Fujimoto', 'https://static.wikia.nocookie.net/chainsaw-man/images/4/4e/Volume_12.png', 1, '978-1974721412', 'Meet awkward high school student Asa Mitaka. She may have trouble getting along with her fellow students and the class pet devil chicken, but Asa has something special going for her. And it may lead her right to Chainsaw Man!');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('The Shining', 'Stephen King', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg', 5, '978-0-385-12167-5', 'A horror novel about a familys winter stay at an isolated hotel.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('Jujutsu Kaisen', 'Gege Akutami', 'https://cdn.dc5.ro/img-prod/404962682-0.jpeg', 1, '978-1974710027', 'Jujutsu Kaisen is the story of Yuji Itadori, an easygoing high school student who joins the occult club at school.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description)
VALUES ('Bible', 'Multiple authors', 'https://m.media-amazon.com/images/I/71ArT4HkssL._SL1013_.jpg', 1, '978-0804109062', 'The holy bible');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'https://m.media-amazon.com/images/I/61z0MrB6qOS._SL1500_.jpg', 1, '978-3-16-148410-0', 'A classic novel depicting the Jazz Age society in the United States.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('Pride and Prejudice', 'Jane Austen', 'https://m.media-amazon.com/images/I/910oVuxR8lS._SL1500_.jpg', 5, '978-0-19-953556-9', 'A timeless novel exploring themes of love, class, and societal expectations.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Hobbit', 'J.R.R. Tolkien', 'https://m.media-amazon.com/images/I/81-JdmZeA9L._SL1500_.jpg', 5, '978-0-261-10219-4', 'An adventure novel set in Tolkien''s Middle-earth, following the journey of Bilbo Baggins.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Hunger Games', 'Suzanne Collins', 'https://m.media-amazon.com/images/I/614SwlZNtJL._SL1200_.jpg', 2, '978-0-439-02348-1', 'A dystopian novel set in a future where young people are forced to participate in a televised death match.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Da Vinci Code', 'Dan Brown', 'https://www.books-by-isbn.com/spix/na-0385504209---Vinci---513jDWxi4nL.jpg', 3, '978-0-385-50420-1', 'A mystery thriller involving symbology, secret societies, and the quest for a hidden religious truth.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Lord of the Rings', 'J.R.R. Tolkien', 'https://m.media-amazon.com/images/I/81XH+m22mjL._SL1500_.jpg', 5, '978-0-618-63422-6', 'An epic fantasy trilogy set in Middle-earth, depicting the struggle against the Dark Lord Sauron.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'https://pictures.abebooks.com/isbn/9780590353403-us.jpg', 1, '978-0-590-35340-3', 'The first book in the Harry Potter series, following the young wizard''s journey at Hogwarts School of Witchcraft and Wizardry.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('Jurassic Park', 'Michael Crichton', 'https://www.publishersweekly.com/cover/9780345370778', 1, '978-0-345-37077-8', 'A science fiction novel about the cloning of dinosaurs for a theme park.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Great Escape', 'Paul Brickhill', 'https://m.media-amazon.com/images/I/61WRzdWxgQL._SL1500_.jpg', 2, '978-0393325799', 'A non-fiction account of a mass escape from a German prisoner-of-war camp during World War II.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Martian', 'Andy Weir', 'https://m.media-amazon.com/images/I/71SRkQ-DwZL._SL1500_.jpg', 4, '978-0-553-41802-6', 'A science fiction novel that follows an astronaut stranded on Mars and his struggle for survival.');

INSERT INTO BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('Adoroid 11010231224214427', 'Teniwoha, Usazaki Shiro, Ado', 'https://st.cdjapan.co.jp/pictures/l/03/37/NEOBK-2959598.jpg?v=1', 1, '9784048976619', 'A Story Depicting The Bonds with The Four Foundational Songs That Define Her Origins');

INSERT INTo BOOKS (title, author, thumb, genre_id, ISBN, description) VALUES
('The Setting Sun', 'Osamu Dazai', 'https://m.media-amazon.com/images/I/31uHNghGUbL._SY445_SX342_.jpg', 3, '9780811200325', 'The Setting Sun is a brief but powerful novel about a family in the aftermath of World War II.');

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

INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition, comment)
VALUES (
        6,
        8,
        1,
        '2023-12-5',
        'Pending',
        'Excelent',
        'Nu bate nu troncane'
       );

INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition, comment) VALUES
    (4, 5, 2, '2023-12-02', 'Pending', 'Very Good', 'Nu bate nu troncane');

INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition, comment) VALUES
    (7, 9, 1, '2023-12-03', 'Pending', 'Excellent', 'Nu bate nu troncane');

INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition, comment) VALUES
    (10, 11, 2, '2023-12-04', 'Approved', 'Good', 'Nu bate nu troncane');

INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition, comment) VALUES
    (13, 14, 1, '2023-12-05', 'Pending', 'Fair', 'Nu bate nu troncane');

INSERT INTO EXCHANGES (book_id_1, book_id_2, owner_id, exchange_date, status, condition, comment) VALUES
    (16, 17, 2, '2023-12-06', 'Approved', 'Like New', 'Nu bate nu troncane');

--Inserting sample bookshelf entries
INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (2, 1);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (6, 1);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (19, 1);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (7, 1);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (13, 1);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (4, 2);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (10, 2);

INSERT INTO BOOKSHELF (book_id, owner_id) VALUES
    (16, 2);

--Inserting sample wishlist entries
INSERT INTO WISHLIST (book_id, owner_id) VALUES
    (1, 1);

INSERT INTO WISHLIST (book_id, owner_id) VALUES
    (8, 1);

INSERT INTO WISHLIST (book_id, owner_id) VALUES
    (5, 2);