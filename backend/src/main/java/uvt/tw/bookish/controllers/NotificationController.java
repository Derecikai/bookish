package uvt.tw.bookish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.bookish.entities.Notification;
import uvt.tw.bookish.services.NotificationService;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{userId}")
    public List<Notification> getNotifications(@PathVariable int userId) {
        return notificationService.getUnreadNotifications(userId);
    }

    @PutMapping("/read")
    public ResponseEntity<String> markNotificationRead(@RequestParam int id) {
        notificationService.markNotificationRead(id);
        return ResponseEntity.ok("Marked as read!");
    }
}