package uvt.tw.bookish.repositories;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Bookshelf;

import java.util.List;

@Repository
public interface BookshelfRepository extends JpaRepository<Bookshelf, Integer> {
    List<Bookshelf> findByOwnerID_Id(int ownerID);


    @Modifying
    @Transactional
    @Query(value = "INSERT INTO Bookshelf (book_id, owner_id, id) VALUES (?1, ?2, default)", nativeQuery = true)
    void add(int bookID, int ownerID);
}
