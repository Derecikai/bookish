package uvt.tw.bookish.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.controllers.requests.ExchangeRequest;
import uvt.tw.bookish.entities.Exchange;
import uvt.tw.bookish.services.ExchangeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/exchanges")
@Tag(name = "Exchange Endpoints", description = "Operations pertaining to book exchanges in Exchange Management System")
public class ExchangeController {
    @Autowired
    private ExchangeService exchangeService;

    @Operation(summary = "Add a new exchange")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Exchange successfully created", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Exchange.class))),
            @ApiResponse(responseCode = "400", description = "Invalid exchange data", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PostMapping()
    public ResponseEntity<Exchange> addExchange(@RequestBody ExchangeRequest exchange) {
        try {
            Exchange result = exchangeService.addExchange(exchange);
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Get exchanges with pagination and search")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Exchange.class))),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping()
    public ResponseEntity<?> getExchangesWithPaginationAndSearch(
            @RequestParam(name = "bookTitle", required = false) String bookTitle,
            @RequestParam(name = "genre", required = false) String genre,
            @RequestParam(name = "location", required = false) String location,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "5") int pageSize) {
        try {
            if (bookTitle != null || genre != null || location != null) {
                List<Exchange> searchResult = exchangeService.searchExchanges(bookTitle, genre, location);
                return ResponseEntity.ok(searchResult);
            } else {
                List<Exchange> result = exchangeService.getExchanges(page, pageSize);
                return ResponseEntity.ok(result);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Get a specific exchange by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved exchange", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Exchange.class))),
            @ApiResponse(responseCode = "404", description = "Exchange not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("{id}")
    public ResponseEntity<Optional<Exchange>> getSpecificExchange(@PathVariable int id) {
        try {
            Optional<Exchange> result = exchangeService.getExchangeByID(id);
            if (result.isPresent()) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Update an existing exchange")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Exchange successfully updated", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Exchange.class))),
            @ApiResponse(responseCode = "400", description = "Invalid exchange data", content = @Content),
            @ApiResponse(responseCode = "404", description = "Exchange not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PutMapping("{id}")
    public ResponseEntity<Exchange> updateExchange(@PathVariable int id,
                                                   @RequestBody ExchangeRequest updatedExchange) {
        try {
            Exchange updated = exchangeService.updateExchange(id, updatedExchange);
            if (updated != null) {
                return ResponseEntity.ok(updated);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Delete an exchange")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Exchange successfully deleted", content = @Content),
            @ApiResponse(responseCode = "404", description = "Exchange not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteExchange(@PathVariable int id) {
        try {
            boolean deleted = exchangeService.deleteExchange(id);
            if (deleted) {
                return ResponseEntity.ok("Entry deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the entry");
        }
    }
}
