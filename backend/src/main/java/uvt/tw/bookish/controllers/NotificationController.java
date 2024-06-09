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
import uvt.tw.bookish.entities.Notification;
import uvt.tw.bookish.services.NotificationService;

import java.util.List;

@RestController
@RequestMapping("/notifications")
@Tag(name = "Notification Management System", description = "Operations pertaining to notifications in Notification Management System")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @Operation(summary = "Get unread notifications for a user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list of notifications", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Notification.class))),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @GetMapping("/{userId}")
    public ResponseEntity<List<Notification>> getNotifications(@PathVariable int userId) {
        try {
            List<Notification> notifications = notificationService.getUnreadNotifications(userId);
            if (notifications.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            } else {
                return ResponseEntity.ok(notifications);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Mark a notification as read")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Notification marked as read", content = @Content),
            @ApiResponse(responseCode = "404", description = "Notification not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)
    })
    @PutMapping("/read")
    public ResponseEntity<String> markNotificationRead(@RequestParam int id) {
        try {
            notificationService.markNotificationRead(id);
            boolean marked = true;
            if (marked) {
                return ResponseEntity.ok("Marked as read!");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Notification not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while marking the notification as read");
        }
    }
}