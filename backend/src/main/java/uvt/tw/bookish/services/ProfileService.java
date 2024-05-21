package uvt.tw.bookish.services;

import uvt.tw.bookish.controllers.requests.BookshelfRequest;
import uvt.tw.bookish.controllers.requests.UserInfoDAO;
import uvt.tw.bookish.entities.Book;
import uvt.tw.bookish.entities.Bookshelf;
import uvt.tw.bookish.entities.Wishlist;

import java.io.OutputStream;
import java.util.List;

public interface ProfileService {
    List<Book> getUserShelf(int id);

    Bookshelf addBookshelfEntry(BookshelfRequest entry);

    boolean deleteBookshelfEntry(int bookID, int ownerID);

    List<Book> getUserWishlist(int id);

    Wishlist addWishlistEntry(BookshelfRequest entry);

    boolean deleteWishlistEntry(int bookID, int ownerID);
    UserInfoDAO getUserInfo(int id);

    public void writeBooksToCSV(OutputStream outputStream, int id);
}
