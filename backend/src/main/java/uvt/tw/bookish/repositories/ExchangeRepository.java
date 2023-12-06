package uvt.tw.bookish.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uvt.tw.bookish.entities.Exchange;

public interface ExchangeRepository extends JpaRepository<Exchange, Integer> {

    @Query("SELECT e FROM Exchange e " +
            "LEFT JOIN e.bookID1 b1 " +
            "LEFT JOIN e.bookID2 b2 " +
            "LEFT JOIN e.ownerID u " +
            "WHERE LOWER(b1.title) LIKE LOWER(CONCAT('%', :bookTitle, '%')) " +
            "   OR LOWER(b2.title) LIKE LOWER(CONCAT('%', :bookTitle, '%')) " +
            "   OR LOWER(b1.genreID.name) LIKE LOWER(CONCAT('%', :genre, '%')) " +
            "   OR LOWER(u.location) LIKE LOWER(CONCAT('%', :location, '%'))")
    Page<Exchange> searchExchanges(String bookTitle, String genre, String location, Pageable pageable);
}
