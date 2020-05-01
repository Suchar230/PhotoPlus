package pl.polsl.photoplus.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@Setter
public class OrderModelDtoWithOrderItems extends OrderModelDto {

    public OrderModelDtoWithOrderItems(final String code, final String userCode, final String orderStatus,
                                       final String paymentMethod, final Integer price) {
        super(code, userCode, orderStatus, paymentMethod, price);
    }

    @JsonProperty("orderItems")
    @NotEmpty(message = "Order item list shouldn't be empty.")
    @Valid
    private List<OrderItemModelDto> orderItemModelDtos;
}