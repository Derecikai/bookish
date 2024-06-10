package uvt.tw.bookish.services.implementations;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import uvt.tw.bookish.controllers.requests.ExchangeRequest;
import uvt.tw.bookish.entities.*;
import uvt.tw.bookish.repositories.*;
import uvt.tw.bookish.services.ExchangeService;
import uvt.tw.bookish.services.NotificationService;

import java.util.List;
import java.util.Optional;

@Service
public class ExchangeServiceImpl implements ExchangeService {
    @Autowired
    private ExchangeRepository exchangeRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public Exchange addExchange(ExchangeRequest exchange) {
        Book book1 = bookRepository.findById(exchange.getBookID1()).orElseThrow();
        Book book2 = bookRepository.findById(exchange.getBookID2()).orElseThrow();
        User owner = userRepository.findById(exchange.getOwnerID()).orElseThrow();

        // Use the builder to create the Exchange object
        Exchange result = Exchange.builder()
                            .bookID1(book1)
                            .bookID2(book2)
                            .ownerID(owner)
                            .exchangeDate(exchange.getExchangeDate())
                            .status(exchange.getStatus())
                            .condition(exchange.getCondition())
                            .comment(exchange.getComment())
                            .build();

        List<Wishlist> matchingUsersIds = wishlistRepository.findByBookID_Id(exchange.getBookID1());

        for(Wishlist userID : matchingUsersIds) {
            String message = "A new book is available: " + book1.getTitle();
            notificationService.createNotification(userID.getOwnerID().getId(), exchange.getBookID1(), message);
        }

        System.out.println(result);
        return exchangeRepository.save(result);
    }

    @Override
    public List<Exchange> getAllExchanges() {
        return exchangeRepository.findAll();
    }

    @Override
    public List<Exchange> getExchanges(int page, int pageSize) {
        Pageable pageable = PageRequest.of(page - 1, pageSize);
        Page<Exchange> exchangePage = exchangeRepository.findAll(pageable);
        return exchangePage.getContent();
    }

    @Override
    public List<Exchange> searchExchanges(String bookTitle, String genre, String location) {
        return exchangeRepository.searchExchanges(bookTitle, genre, location);
    }

    @Override
    public boolean deleteExchange(int id) {
        Optional<Exchange> result = exchangeRepository.findById(id);

        if(result.isPresent()) {
            exchangeRepository.delete(result.get());

            List<Notification> notifs = notificationRepository.findByBookId(result.get().getBookID1().getId());

            //String message = "A new book is available: " + book1.getTitle();
            notificationRepository.deleteAll(notifs);

            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public Exchange updateExchange(int id, ExchangeRequest updatedExchange) {
        Exchange existingExchange = exchangeRepository.findById(id).orElse(null);

        if(existingExchange != null) {
            Book book1 = bookRepository.findById(updatedExchange.getBookID1()).orElseThrow();
            Book book2 = bookRepository.findById(updatedExchange.getBookID2()).orElseThrow();
            //User owner = userRepository.findById(updatedExchange.getOwnerID()).orElseThrow();

            existingExchange.setBookID1(book1);
            existingExchange.setBookID2(book2);
            existingExchange.setStatus(updatedExchange.getStatus());
            existingExchange.setCondition(updatedExchange.getCondition());
            existingExchange.setComment(updatedExchange.getComment());

            return exchangeRepository.save(existingExchange);
        }
        else {
            return null;
        }
    }

    @Override
    public Optional<Exchange> getExchangeByID(int id) {
        return exchangeRepository.findById(id);
    }

    @Override
    public List<Exchange> getExchangeByOwnerID(int id) {
        List<Exchange> result = exchangeRepository.findByOwnerID_Id(id);
        return result;
    }
}
