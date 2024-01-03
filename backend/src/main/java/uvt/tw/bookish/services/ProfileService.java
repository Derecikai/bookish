package uvt.tw.bookish.services;

import uvt.tw.bookish.controllers.requests.BookshelfRequest;
import uvt.tw.bookish.controllers.requests.UserInfoDAO;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Bookshelf;
import uvt.tw.bookish.entities.Wishlist;

import java.util.List;

public interface ProfileService {
    List<Book> getUserShelf(int id);

    Bookshelf addBookshelfEntry(BookshelfRequest entry);

    boolean delete(int id);

    List<Book> getUserWishlist(int id);

    Wishlist addWishlistEntry(BookshelfRequest entry);

    boolean deleteWishlistEntry(int id);
    UserInfoDAO getUserInfo(int id);
}
