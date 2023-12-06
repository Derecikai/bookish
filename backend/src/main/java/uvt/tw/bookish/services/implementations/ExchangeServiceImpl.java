package uvt.tw.bookish.services.implementations;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import java.util.Optional;

@Service
public class ExchangeServiceImpl implements ExchangeService {
    @Autowired
    private ExchangeRepository exchangeRepository;

    @Autowired
    private BookRepository bookRepository;

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
    public Optional<Exchange> getExchangeByID(int id) {
        return exchangeRepository.findById(id);
    }
}
