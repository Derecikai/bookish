package uvt.tw.bookish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.controllers.requests.MessageRequest;
import uvt.tw.bookish.entities.Message;
import uvt.tw.bookish.services.MessageService;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @PostMapping("/add")
    public ResponseEntity<Message> addMessage(@RequestBody MessageRequest request) {
        Message result = messageService.addMessage(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/getSended/{id}")
    public ResponseEntity<List<Message>> getMessageSended(@PathVariable int id) {
        List<Message> result = messageService.getBySender(id);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getReceived/{id}")
    public ResponseEntity<List<Message>> getMessageReceived(@PathVariable int id) {
        List<Message> result = messageService.getByReceiver(id);
        return ResponseEntity.ok(result);
    }
}
