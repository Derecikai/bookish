package uvt.tw.bookish.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
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
@Tag(name = "Profile Endpoints", description = "Operations pertaining to user profiles in Profile Management System")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @Autowired
    private ExchangeService exchangeService;

    @Operation(summary = "Get user information by user ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved user information", content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserInfoDAO.class))),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoDAO> getUserInfo(@PathVariable int userId) {
        try {
            UserInfoDAO infoDAO = profileService.getUserInfo(userId);
            if (infoDAO != null) {
                return ResponseEntity.ok(infoDAO);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Get user exchanges by user ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list of exchanges", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Exchange.class))),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("/{userID}/exchanges")
    public ResponseEntity<List<Exchange>> getExchanges(@PathVariable int userID) {
        try {
            List<Exchange> result = exchangeService.getExchangeByOwnerID(userID);
            if (!result.isEmpty()) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Get user bookshelf by user ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved bookshelf", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Book.class))),
            @ApiResponse(responseCode = "404", description = "Bookshelf not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("/{id}/bookshelf")
    public ResponseEntity<List<Book>> getBookshelf(@PathVariable int id) {
        try {
            List<Book> result = profileService.getUserShelf(id);
            if (!result.isEmpty()) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Add a new bookshelf entry")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Bookshelf entry successfully created", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Bookshelf.class))),
            @ApiResponse(responseCode = "400", description = "Invalid request data", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PostMapping("/bookshelf")
    public ResponseEntity<Bookshelf> addBookshelfEntry(@RequestBody BookshelfRequest entry) {
        try {
            Bookshelf result = profileService.addBookshelfEntry(entry);
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Delete a bookshelf entry")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Bookshelf entry successfully deleted", content = @Content),
            @ApiResponse(responseCode = "404", description = "Bookshelf entry not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @DeleteMapping("/{ownerID}/bookshelf/{bookID}")
    public ResponseEntity<String> deleteBookshelfEntry(@PathVariable int bookID,
                                                       @PathVariable int ownerID) {
        try {
            boolean deleted = profileService.deleteBookshelfEntry(bookID, ownerID);
            if (deleted) {
                return ResponseEntity.ok("Entry deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the entry");
        }
    }

    @Operation(summary = "Get user wishlist by user ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved wishlist", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Book.class))),
            @ApiResponse(responseCode = "404", description = "Wishlist not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("/{id}/wishlist")
    public ResponseEntity<List<Book>> getWishlist(@PathVariable int id) {
        try {
            List<Book> result = profileService.getUserWishlist(id);
            if (!result.isEmpty()) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Add a new wishlist entry")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Wishlist entry successfully created", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Wishlist.class))),
            @ApiResponse(responseCode = "400", description = "Invalid request data", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PostMapping("/wishlist")
    public ResponseEntity<Wishlist> addWishlistEntry(@RequestBody BookshelfRequest entry) {
        try {
            Wishlist result = profileService.addWishlistEntry(entry);
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Delete a wishlist entry")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Wishlist entry successfully deleted", content = @Content),
            @ApiResponse(responseCode = "404", description = "Wishlist entry not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @DeleteMapping("/{ownerID}/wishlist/{bookID}")
    public ResponseEntity<String> deleteWishlistEntry(@PathVariable int bookID,
                                                      @PathVariable int ownerID) {
        try {
            boolean deleted = profileService.deleteWishlistEntry(bookID, ownerID);
            if (deleted) {
                return ResponseEntity.ok("Entry deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the entry");
        }
    }

    @Operation(summary = "Export books to CSV")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Books successfully exported to CSV", content = @Content(mediaType = "text/csv")),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("/{id}/export/csv")
    public ResponseEntity<byte[]> exportBooksToCSV(@PathVariable int id) {
        try {
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            profileService.writeBooksToCSV(outputStream, id);
            byte[] csvData = outputStream.toByteArray();

            HttpHeaders headers = new HttpHeaders();
            headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=books.csv");
            headers.setContentType(MediaType.TEXT_PLAIN);
            headers.setContentLength(csvData.length);

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(csvData);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Import books from CSV")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Books successfully imported", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PostMapping(value = "/import/csv", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> importBooksFromCSV(
            @RequestPart("file") MultipartFile file,
            @RequestParam("userID") int userID) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload a valid CSV file");
        }

        try {
            profileService.importBooksFromCSV(file, userID);
            return ResponseEntity.ok("Books imported successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to import books: " + e.getMessage());
        }
    }
}
