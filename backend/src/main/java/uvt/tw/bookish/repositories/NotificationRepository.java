package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uvt.tw.bookish.entities.Notification;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    List<Notification> findByUserIdAndIsRead(int userId, boolean isRead);
    List<Notification> findByBookId(int bookId);
}
