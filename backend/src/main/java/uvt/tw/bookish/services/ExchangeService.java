package uvt.tw.bookish.services;

import uvt.tw.bookish.controllers.requests.ExchangeRequest;
import uvt.tw.bookish.entities.Exchange;

import java.util.List;
import java.util.Optional;

public interface ExchangeService {
    public Exchange addExchange(ExchangeRequest exchange);

    public List<Exchange> getAllExchanges();

    public List<Exchange> getExchanges(int page, int pageSize);

    Optional<Exchange> getExchangeByID(int id);
}
