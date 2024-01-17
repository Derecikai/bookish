package uvt.tw.bookish.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MESSAGES")
public class Message {
    @Id
    private int id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "sender_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"password","email","fullName","bio","privacySettings","role","enabled","accountNonExpired","credentialsNonExpired","authorities","accountNonLocked"})
    private User senderId;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "receiver_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"password","email","fullName","bio","privacySettings","role","enabled","accountNonExpired","credentialsNonExpired","authorities","accountNonLocked"})
    private User receieverId;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "exchange_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"owner_id","exchangeDate","status","condition","comment"})
    private Exchange exchangeId;

    private String content;

    private Date date;
}
