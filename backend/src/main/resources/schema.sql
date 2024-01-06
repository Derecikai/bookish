-- Creating USERS table
CREATE TABLE _USERS (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        username VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        full_name VARCHAR(255),
                        profile_picture VARCHAR(255),
                        bio VARCHAR(255),
                        location VARCHAR(255),
                        privacy_settings VARCHAR(255),
                        role VARCHAR(255) NOT NULL
);

-- Creating GENRES table
CREATE TABLE GENRES (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL
);

-- Creating BOOKS table
CREATE TABLE BOOKS (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(255) NOT NULL,
                       author VARCHAR(255) NOT NULL,
                       thumb VARCHAR(255),
                       genre_id INT,
                       ISBN VARCHAR(20),
                       description VARCHAR(255),
                       FOREIGN KEY (genre_id) REFERENCES GENRES(id)
);

-- Creating EXCHANGE table
CREATE TABLE EXCHANGES (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          book_id_1 INT,
                          book_id_2 INT,
                          owner_id INT,
                          exchange_date DATE,
                          status VARCHAR(255),
                          condition VARCHAR(255),
                          comment VARCHAR(255),
                          FOREIGN KEY (book_id_1) REFERENCES BOOKS(id),
                          FOREIGN KEY (book_id_2) REFERENCES BOOKS(id),
                          FOREIGN KEY (owner_id) REFERENCES _USERS(id)
);

-- Creating BOOKSHELF table
CREATE TABLE BOOKSHELF (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           book_id INT,
                           owner_id INT,
                           FOREIGN KEY (book_id) REFERENCES BOOKS(id),
                           FOREIGN KEY (owner_id) REFERENCES _USERS(id)
);

-- Creating WISHLIST table
CREATE TABLE WISHLIST (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           book_id INT,
                           owner_id INT,
                           FOREIGN KEY (book_id) REFERENCES BOOKS(id),
                           FOREIGN KEY (owner_id) REFERENCES _USERS(id)
);

CREATE INDEX idx_book_owner ON WISHLIST (book_id, owner_id);

-- Creating NOTIFICATIONS table
CREATE TABLE NOTIFICATIONS (
                               id INT AUTO_INCREMENT PRIMARY KEY,
                               user_id INT,
                               book_id INT,
                               message VARCHAR(255),
                               is_read BOOLEAN,
                               date DATE DEFAULT CURRENT_DATE
);