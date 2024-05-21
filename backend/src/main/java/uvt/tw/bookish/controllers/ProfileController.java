package uvt.tw.bookish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.controllers.requests.BookshelfRequest;
import uvt.tw.bookish.controllers.requests.UserInfoDAO;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Bookshelf;
import uvt.tw.bookish.entities.Exchange;
import uvt.tw.bookish.entities.Wishlist;
import uvt.tw.bookish.services.ExchangeService;
import uvt.tw.bookish.services.ProfileService;

import java.io.ByteArrayOutputStream;
import java.util.List;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @Autowired
    private ExchangeService exchangeService;

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoDAO> getUserInfo(@PathVariable int userId) {
        UserInfoDAO infoDAO = profileService.getUserInfo(userId);
        return ResponseEntity.ok(infoDAO);
    }

    @GetMapping("/{userID}/exchanges")
    public ResponseEntity<List<Exchange>> getExchanges(@PathVariable int userID) {
        List<Exchange> result = exchangeService.getExchangeByOwnerID(userID);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/{id}/bookshelf")
    public ResponseEntity<List<Book>> getBookshelf(@PathVariable int id) {
        List<Book> result = profileService.getUserShelf(id);
        if(!result.isEmpty()) {
            return ResponseEntity.ok(result);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/bookshelf")
    public ResponseEntity<Bookshelf> addBookshelfEntry(@RequestBody BookshelfRequest entry) {
        Bookshelf result = profileService.addBookshelfEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @DeleteMapping("/{ownerID}/bookshelf/{bookID}")
    public ResponseEntity<String> deleteBookshelfEntry(@PathVariable int bookID,
                                                       @PathVariable int ownerID) {
        boolean deleted = profileService.deleteBookshelfEntry(bookID, ownerID);

        if (deleted) {
            return ResponseEntity.ok("Entry deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
        }
    }

    @GetMapping("/{id}/wishlist")
    public ResponseEntity<List<Book>> getWishlist(@PathVariable int id) {
        List<Book> result = profileService.getUserWishlist(id);
        if(!result.isEmpty()) {
            return ResponseEntity.ok(result);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/wishlist")
    public ResponseEntity<Wishlist> addWishlistEntry(@RequestBody BookshelfRequest entry) {
        Wishlist result = profileService.addWishlistEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @DeleteMapping("/{ownerID}/wishlist/{bookID}")
    public ResponseEntity<String> deleteWishlistEntry(@PathVariable int bookID,
                                                      @PathVariable int ownerID) {
        boolean deleted = profileService.deleteWishlistEntry(bookID, ownerID);

        if (deleted) {
            return ResponseEntity.ok("Entry deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
        }
    }


    @GetMapping("/{id}/export/csv")
    public ResponseEntity<byte[]> exportBooksToCSV(@PathVariable int id) {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        profileService.writeBooksToCSV(outputStream,id);
        byte[] csvData = outputStream.toByteArray();

        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=books.csv");
        headers.setContentType(MediaType.TEXT_PLAIN);
        headers.setContentLength(csvData.length);

        return ResponseEntity.ok()
                .headers(headers)
                .body(csvData);
    }
}
