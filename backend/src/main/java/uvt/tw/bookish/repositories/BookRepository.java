package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.bookish.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
}
