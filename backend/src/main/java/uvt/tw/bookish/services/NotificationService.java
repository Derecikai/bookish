package uvt.tw.bookish.services;

import uvt.tw.bookish.entities.Notification;

import java.util.List;

public interface NotificationService {
    public void createNotification(int userId, int bookId, String message);

    public List<Notification> getUnreadNotifications(int userId);

    void markNotificationRead(int id);
}
