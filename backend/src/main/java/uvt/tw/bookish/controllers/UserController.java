package uvt.tw.bookish.controllers;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.entities.Exchange;
import uvt.tw.bookish.entities.User;
import uvt.tw.bookish.services.ExchangeService;
import uvt.tw.bookish.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private ExchangeService exchangeService;

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User result = userService.addUser(user);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/exchanges/{userID}")
    public ResponseEntity<List<Exchange>> getExchanges(@PathVariable int userID) {
        List<Exchange> result = exchangeService.getExchangeByOwnerID(userID);
        return ResponseEntity.status(HttpStatus.FOUND).body(result);
    }
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
