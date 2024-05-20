package uvt.tw.bookish.services.implementations;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uvt.tw.bookish.entities.User;
import uvt.tw.bookish.repositories.UserRepository;
import uvt.tw.bookish.services.UserService;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean deleteUser(int id) {
        if(userRepository.existsById(id)) {
            try{userRepository.deleteById(id); }
            catch (Exception e) {
                return false;
            }
            userRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
