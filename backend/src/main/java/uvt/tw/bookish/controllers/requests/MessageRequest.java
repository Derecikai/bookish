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
public class MessageRequest {
    private int senderID;
    private int receiverID;
    private int exchangeID;
    private String content;
    private Date timestamp;

}
