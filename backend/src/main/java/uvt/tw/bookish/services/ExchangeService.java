package uvt.tw.bookish.services;

import uvt.tw.bookish.controllers.requests.ExchangeRequest;
import uvt.tw.bookish.entities.Exchange;

import java.util.List;

public interface ExchangeService {
    public Exchange addExchange(ExchangeRequest exchange);

    public List<Exchange> getAllExchanges();
}
