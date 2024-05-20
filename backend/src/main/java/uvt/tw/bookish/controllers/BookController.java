package uvt.tw.bookish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @PostMapping()
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book result = bookService.addBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }


    @GetMapping
    public ResponseEntity<List<Book>> getBookByFields(@RequestParam(required = false) Integer id,
                                                      @RequestParam(required = false) String title,
                                                      @RequestParam(required = false) String author,
                                                      @RequestParam(required = false) Integer genreID,
                                                      @RequestParam(required = false) String isbn) {
        List<Book> searchResult = bookService.getBookByFields(id,title,author,genreID,isbn);

        if(searchResult.isEmpty()){
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(searchResult);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id,
                                           @RequestBody Book updatedBook) {
        Book result = bookService.updateBook(id, updatedBook);
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/{id}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteBook(@PathVariable int id) {
        boolean deleted = bookService.deleteBook(id);

        if (deleted) {
            return ResponseEntity.ok("Book deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Can't delete mate");
        }
    }
}
