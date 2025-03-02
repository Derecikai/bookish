package uvt.tw.bookish.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uvt.tw.bookish.entities.Notification;
import uvt.tw.bookish.repositories.NotificationRepository;
import uvt.tw.bookish.services.NotificationService;

import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;
    @Override
    public void createNotification(int userId, int bookId, String message) {
        Notification notification = new Notification();
        notification.setUserId(userId);
        notification.setBookId(bookId);
        notification.setMessage(message);
        //snotification.setDate(new Date());
        notification.setRead(false);

        notificationRepository.save(notification);
    }

    @Override
    public List<Notification> getUnreadNotifications(int userId) {
        return notificationRepository.findByUserIdAndIsRead(userId, false);
    }

    @Override
    public void markNotificationRead(int id) {
        Notification result = notificationRepository.findById(id).orElseThrow();
        System.out.println(result);
        result.setRead(true);
        notificationRepository.save(result);
    }
}
