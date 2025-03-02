package uvt.tw.bookish.services;

import uvt.tw.bookish.entities.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);

    public List<User> getAllUsers();

    boolean deleteUser(int id);
}
