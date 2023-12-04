package uvt.tw.bookish.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uvt.tw.bookish.controllers.requests.ExchangeRequest;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Exchange;
import uvt.tw.bookish.entities.User;
import uvt.tw.bookish.repositories.BookRepository;
import uvt.tw.bookish.repositories.ExchangeRepository;
import uvt.tw.bookish.repositories.UserRepository;
import uvt.tw.bookish.services.ExchangeService;

import java.util.List;

@Service
public class ExchangeServiceImpl implements ExchangeService {
    @Autowired
    private ExchangeRepository exchangeRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Exchange addExchange(ExchangeRequest exchange) {
        Book book1 = bookRepository.findById(exchange.getBookID1()).orElseThrow();
        Book book2 = bookRepository.findById(exchange.getBookID2()).orElseThrow();
        User owner = userRepository.findById(exchange.getOwnerID()).orElseThrow();

        // Use the builder to create the Exchange object
        return Exchange.builder()
                .bookID1(book1)
                .bookID2(book2)
                .ownerID(owner)
                .exchangeDate(exchange.getExchangeDate())
                .status(exchange.getStatus())
                .condition(exchange.getCondition())
                .build();
    }

    @Override
    public List<Exchange> getAllExchanges() {
        return exchangeRepository.findAll();
    }
}
