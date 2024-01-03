package uvt.tw.bookish.controllers;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
public class ExchangeController {
    @Autowired
    private ExchangeService exchangeService;

    @PostMapping("/add")
    public ResponseEntity<Exchange> addExchange(@RequestBody ExchangeRequest exchange) {
        Exchange result = exchangeService.addExchange(exchange);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Exchange>> getExchanges(@RequestParam(defaultValue = "1") int page,
                                                       @RequestParam(defaultValue = "5") int pageSize) {
        List<Exchange> result = exchangeService.getExchanges(page, pageSize);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getExchange")
    public ResponseEntity<Optional<Exchange>> getSpecificExchange(@RequestParam int id) {
        Optional<Exchange> result = exchangeService.getExchangeByID(id);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Exchange>> searchExchanges(
            @RequestParam(name = "bookTitle", required = false) String bookTitle,
            @RequestParam(name = "genre", required = false) String genre,
            @RequestParam(name = "location", required = false) String location,
            Pageable pageable) {
        Page<Exchange> exchanges = exchangeService.searchExchanges(bookTitle, genre, location, pageable);
        return ResponseEntity.ok(exchanges);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Exchange> updateExchange(@PathVariable int id,
                                                   @RequestBody ExchangeRequest updatedExchange) {
        Exchange updated = exchangeService.updateExchange(id, updatedExchange);

        if(updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteExchange(@RequestParam int id) {
        boolean deleted = exchangeService.deleteExchange(id);

        if (deleted) {
            return ResponseEntity.ok("Entry deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entry not found");
        }
    }
    @GetMapping("/all")
    public ResponseEntity<List<Exchange>> getAllExchanges() {
        List<Exchange> exchanges = exchangeService.getAllExchanges();
        return ResponseEntity.ok(exchanges);
    }
}
