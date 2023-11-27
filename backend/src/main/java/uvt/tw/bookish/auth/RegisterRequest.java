package uvt.tw.bookish.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import uvt.tw.bookish.entities.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String fullName;
    private String email;
    private String password;
    private String profilePicture;
    private String username;
    private String bio;
    private String location;
    private String privacySettings;
    private Role role;
}
