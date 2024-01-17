package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.bookish.entities.Message;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {
    List<Message> findBySenderId_Id(int senderId);

    List<Message> findByReceieverId_Id(int receiverId);
}
