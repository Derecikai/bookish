package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uvt.tw.bookish.entities.Bookshelf;
import uvt.tw.bookish.entities.Wishlist;

import java.util.List;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
    List<Wishlist> findByOwnerID_Id(int ownerID);
}
