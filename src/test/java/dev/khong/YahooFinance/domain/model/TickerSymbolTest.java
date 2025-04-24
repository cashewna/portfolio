package dev.khong.YahooFinance.domain.model;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.NullSource;
import org.junit.jupiter.params.provider.ValueSource;

class TickerSymbolTest {

    @ParameterizedTest
    @NullSource
    void constructor_shouldThrowIllegalArgumentException_whenSymbolIsNull(String nullSymbol) {
        var exception =
                assertThrows(IllegalArgumentException.class, () -> new TickerSymbol(nullSymbol));

        // White box assertion
        assertEquals("Ticker symbol cannot be null.", exception.getMessage());
    }

    @ParameterizedTest
    @ValueSource(strings = {"", " ", "   ", "\t", "\n"})
    void constructor_shouldThrowIllegalArgumentException_whenSymbolIsNullOrEmptyOrBlank(
            String blankSymbol) {
        var exception =
                assertThrows(IllegalArgumentException.class, () -> new TickerSymbol(blankSymbol));

        // White box assertion
        assertEquals("Ticker symbol cannot be blank.", exception.getMessage());
    }
}
