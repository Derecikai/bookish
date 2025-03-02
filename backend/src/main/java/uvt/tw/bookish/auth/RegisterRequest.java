package uvt.tw.bookish.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import uvt.tw.bookish.entities.enums.Role;

import java.util.Objects;

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

    // No-argument constructor (replaces @NoArgsConstructor)
    public RegisterRequest() {
    }

    // All-arguments constructor (replaces @AllArgsConstructor)
    public RegisterRequest(String fullName, String email, String password, String profilePicture, String username, String bio, String location, String privacySettings, Role role) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.username = username;
        this.bio = bio;
        this.location = location;
        this.privacySettings = privacySettings;
        this.role = role;
    }

    // Getters and Setters (replaces @Data)
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
        return "RegisterRequest{" +
                "fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", profilePicture='" + profilePicture + '\'' +
                ", username='" + username + '\'' +
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
        RegisterRequest that = (RegisterRequest) o;
        return Objects.equals(fullName, that.fullName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(password, that.password) &&
                Objects.equals(profilePicture, that.profilePicture) &&
                Objects.equals(username, that.username) &&
                Objects.equals(bio, that.bio) &&
                Objects.equals(location, that.location) &&
                Objects.equals(privacySettings, that.privacySettings) &&
                role == that.role;
    }

    // hashCode method (replaces @Data)
    @Override
    public int hashCode() {
        return Objects.hash(fullName, email, password, profilePicture, username, bio, location, privacySettings, role);
    }

    // Builder pattern (replaces @Builder)
    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private String fullName;
        private String email;
        private String password;
        private String profilePicture;
        private String username;
        private String bio;
        private String location;
        private String privacySettings;
        private Role role;

        public Builder fullName(String fullName) {
            this.fullName = fullName;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder profilePicture(String profilePicture) {
            this.profilePicture = profilePicture;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
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

        public RegisterRequest build() {
            RegisterRequest request = new RegisterRequest();
            request.setFullName(this.fullName);
            request.setEmail(this.email);
            request.setPassword(this.password);
            request.setProfilePicture(this.profilePicture);
            request.setUsername(this.username);
            request.setBio(this.bio);
            request.setLocation(this.location);
            request.setPrivacySettings(this.privacySettings);
            request.setRole(this.role);
            return request;
        }
    }
}
