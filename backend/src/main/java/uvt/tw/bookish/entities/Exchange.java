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
@Table(name = "EXCHANGES")
public class Exchange {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "book_id_1", referencedColumnName = "id")
    //@JsonIgnoreProperties({"author","genreID","ISBN","description"})
    private Book bookID1;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "book_id_2", referencedColumnName = "id")
    //@JsonIgnoreProperties({"author","genreID","ISBN","description"})
    private Book bookID2;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"password","email","fullName","bio","privacySettings","role","enabled","accountNonExpired","credentialsNonExpired","authorities","accountNonLocked"})
    private User ownerID;

    private Date exchangeDate;

    private String status;

    private String condition;
}
