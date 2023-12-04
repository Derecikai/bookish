package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.bookish.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Integer> {
}
