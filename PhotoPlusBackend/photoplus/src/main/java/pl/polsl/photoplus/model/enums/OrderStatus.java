package pl.polsl.photoplus.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import pl.polsl.photoplus.model.exceptions.EnumValueException;

import java.util.Arrays;

public enum OrderStatus {
    PENDING, PAID, READY_TO_SHIP, SHIPPED, DELIVERED;

    @JsonCreator
    public static OrderStatus getOrderStatusFromString(final String name) throws EnumValueException {
        if (name != null) {
            return Arrays.stream(OrderStatus.values())
                    .filter(x -> x.name().equalsIgnoreCase(name))
                    .findFirst()
                    .orElseThrow(() -> new EnumValueException("Unknown OrderStatus value: " + name, OrderStatus.class.getSimpleName()));
        }
        throw new EnumValueException("Unknown OrderStatus value.", OrderStatus.class.getSimpleName());
    }
}
