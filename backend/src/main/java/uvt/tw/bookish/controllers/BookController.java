package uvt.tw.bookish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Genre;
import uvt.tw.bookish.entities.User;
import uvt.tw.bookish.services.BookService;
import uvt.tw.bookish.services.GenreService;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @Autowired
    private GenreService genreService;

    @PostMapping("/add")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book result = bookService.addBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @PostMapping("/addGenre")
    public ResponseEntity<Genre> addGenre(@RequestBody Genre genre) {
        Genre result = genreService.addGenre(genre);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/allGenre")
    public ResponseEntity<List<Genre>> getAllGenres() {
        List<Genre> genre = genreService.getAll();
        return ResponseEntity.ok(genre);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> book = bookService.getAllBooks();
        return ResponseEntity.ok(book);
    }
}
