package uvt.tw.bookish.controllers.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExchangeRequest {
    private int bookID1;
    private int bookID2;
    private int ownerID;
    private Date exchangeDate;
    private String status;
    private String condition;
}
