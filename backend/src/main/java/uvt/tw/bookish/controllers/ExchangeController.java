package uvt.tw.bookish.controllers;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.controllers.requests.ExchangeRequest;
import uvt.tw.bookish.entities.Exchange;
import uvt.tw.bookish.services.ExchangeService;

import java.util.List;

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

    @GetMapping("/all")
    public ResponseEntity<List<Exchange>> getAllExchanges() {
        List<Exchange> exchanges = exchangeService.getAllExchanges();
        return ResponseEntity.ok(exchanges);
    }
}