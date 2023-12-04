package uvt.tw.bookish.services;

import uvt.tw.bookish.entities.Book;

import java.util.List;

public interface BookService {
    public Book addBook(Book book);

    public List<Book> getAllBooks();

    List<Book> getBookByFields(Integer id, String title, String author, Integer genreID, String isbn);
}
