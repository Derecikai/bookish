package uvt.tw.bookish.services;

import uvt.tw.bookish.controllers.requests.MessageRequest;
import uvt.tw.bookish.entities.Message;

import java.util.List;

public interface MessageService {
    Message addMessage(MessageRequest message);

    List<Message> getAll();

    List<Message> getBySender(int id);

    List<Message> getByReceiver(int id);
}
