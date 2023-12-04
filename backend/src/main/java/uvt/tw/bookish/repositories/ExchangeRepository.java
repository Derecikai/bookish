package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.bookish.entities.Exchange;

public interface ExchangeRepository extends JpaRepository<Exchange, Integer> {
}
