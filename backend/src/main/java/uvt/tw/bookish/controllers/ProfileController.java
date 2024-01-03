package uvt.tw.bookish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.controllers.requests.BookshelfRequest;
import uvt.tw.bookish.controllers.requests.UserInfoDAO;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Bookshelf;
import uvt.tw.bookish.entities.Wishlist;
import uvt.tw.bookish.services.ProfileService;

import java.util.List;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @GetMapping()
    public ResponseEntity<UserInfoDAO> getUserInfo(@RequestParam int id) {
        UserInfoDAO infoDAO = profileService.getUserInfo(id);
        return ResponseEntity.ok(infoDAO);
    }

    @GetMapping("/bookshelf/{id}")
    public ResponseEntity<List<Book>> getBookshelf(@PathVariable int id) {
        List<Book> result = profileService.getUserShelf(id);
        if(!result.isEmpty()) {
            return ResponseEntity.ok(result);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/bookshelf/add")
    public ResponseEntity<Bookshelf> addBookshelfEntry(@RequestBody BookshelfRequest entry) {
        Bookshelf result = profileService.addBookshelfEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @DeleteMapping("/bookshelf/delete")
    public ResponseEntity<String> deleteBookshelfEntry(@RequestParam int id) {
        boolean deleted = profileService.delete(id);

        if (deleted) {
            return ResponseEntity.ok("Entry deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
        }
    }

    @GetMapping("/wishlist/{id}")
    public ResponseEntity<List<Book>> getWishlist(@PathVariable int id) {
        List<Book> result = profileService.getUserWishlist(id);
        if(!result.isEmpty()) {
            return ResponseEntity.ok(result);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/wishlist/add")
    public ResponseEntity<Wishlist> addWishlistEntry(@RequestBody BookshelfRequest entry) {
        Wishlist result = profileService.addWishlistEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @DeleteMapping("/wishlist/delete")
    public ResponseEntity<String> deleteWishlistEntry(@RequestParam int id) {
        boolean deleted = profileService.deleteWishlistEntry(id);

        if (deleted) {
            return ResponseEntity.ok("Entry deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
        }
    }

}
