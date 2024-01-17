package uvt.tw.bookish.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uvt.tw.bookish.controllers.requests.MessageRequest;
import uvt.tw.bookish.entities.Exchange;
import uvt.tw.bookish.entities.Message;
import uvt.tw.bookish.entities.User;
import uvt.tw.bookish.repositories.ExchangeRepository;
import uvt.tw.bookish.repositories.MessageRepository;
import uvt.tw.bookish.repositories.UserRepository;
import uvt.tw.bookish.services.MessageService;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExchangeRepository exchangeRepository;

    @Override
    public Message addMessage(MessageRequest message) {
        User sender = userRepository.findById(message.getSenderID()).orElseThrow();
        User receiver = userRepository.findById(message.getReceiverID()).orElseThrow();
        Exchange exchange = exchangeRepository.findById(message.getExchangeID()).orElseThrow();

        Message result = Message.builder()
                                .senderId(sender)
                                .receieverId(receiver)
                                .exchangeId(exchange)
                                .content(message.getContent())
                                .date(message.getTimestamp())
                                .build();

        return messageRepository.save(result);
        //return messageRepository.save(message);
    }

    @Override
    public List<Message> getAll() {
        return messageRepository.findAll();
    }

    @Override
    public List<Message> getBySender(int id) {
        return messageRepository.findBySenderId_Id(id);
    }

    @Override
    public List<Message> getByReceiver(int id) {
        return messageRepository.findByReceieverId_Id(id);
    }
}
