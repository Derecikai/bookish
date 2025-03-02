package uvt.tw.bookish.entities;

import jakarta.persistence.*;

import java.util.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import uvt.tw.bookish.entities.enums.Role;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "_USERS")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;

    private String password;

    private String email;

    private String fullName;

    private String profilePicture;

    private String bio;

    private String location;

    private String privacySettings;

    @Enumerated(EnumType.STRING)
    private Role role;

    // No-argument constructor (replaces @NoArgsConstructor)
    public User() {
    }

    // All-arguments constructor (replaces @AllArgsConstructor)
    public User(int id, String username, String password, String email, String fullName, String profilePicture, String bio, String location, String privacySettings, Role role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.profilePicture = profilePicture;
        this.bio = bio;
        this.location = location;
        this.privacySettings = privacySettings;
        this.role = role;
    }

    // Getters and Setters (replaces @Data)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String getUsername() {
        return email; // Overridden to return email as the username
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPrivacySettings() {
        return privacySettings;
    }

    public void setPrivacySettings(String privacySettings) {
        this.privacySettings = privacySettings;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    // toString method (replaces @Data)
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", fullName='" + fullName + '\'' +
                ", profilePicture='" + profilePicture + '\'' +
                ", bio='" + bio + '\'' +
                ", location='" + location + '\'' +
                ", privacySettings='" + privacySettings + '\'' +
                ", role=" + role +
                '}';
    }

    // equals method (replaces @Data)
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id &&
                Objects.equals(username, user.username) &&
                Objects.equals(password, user.password) &&
                Objects.equals(email, user.email) &&
                Objects.equals(fullName, user.fullName) &&
                Objects.equals(profilePicture, user.profilePicture) &&
                Objects.equals(bio, user.bio) &&
                Objects.equals(location, user.location) &&
                Objects.equals(privacySettings, user.privacySettings) &&
                role == user.role;
    }

    // hashCode method (replaces @Data)
    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, email, fullName, profilePicture, bio, location, privacySettings, role);
    }

    // Builder pattern (replaces @Builder)
    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private int id;
        private String username;
        private String password;
        private String email;
        private String fullName;
        private String profilePicture;
        private String bio;
        private String location;
        private String privacySettings;
        private Role role;

        public Builder id(int id) {
            this.id = id;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder fullName(String fullName) {
            this.fullName = fullName;
            return this;
        }

        public Builder profilePicture(String profilePicture) {
            this.profilePicture = profilePicture;
            return this;
        }

        public Builder bio(String bio) {
            this.bio = bio;
            return this;
        }

        public Builder location(String location) {
            this.location = location;
            return this;
        }

        public Builder privacySettings(String privacySettings) {
            this.privacySettings = privacySettings;
            return this;
        }

        public Builder role(Role role) {
            this.role = role;
            return this;
        }

        public User build() {
            User user = new User();
            user.setId(this.id);
            user.setUsername(this.username);
            user.setPassword(this.password);
            user.setEmail(this.email);
            user.setFullName(this.fullName);
            user.setProfilePicture(this.profilePicture);
            user.setBio(this.bio);
            user.setLocation(this.location);
            user.setPrivacySettings(this.privacySettings);
            user.setRole(this.role);
            return user;
        }
    }

    // UserDetails methods
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
