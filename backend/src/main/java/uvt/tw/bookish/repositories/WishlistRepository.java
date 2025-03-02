package uvt.tw.bookish.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uvt.tw.bookish.entities.Wishlist;

import java.util.List;
import java.util.Optional;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
    List<Wishlist> findByOwnerID_Id(int ownerID);

    Optional<Wishlist> findWishlistByBookID_IdAndOwnerID_Id(int bookID, int ownerID);

    List<Wishlist> findByBookID_Id(int bookID1);
}
