package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.bookish.entities.Book;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findAll(Specification<Book> spec);
}
