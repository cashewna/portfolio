package dev.khong.YahooFinance.domain.model;

public record TickerSymbol(String value) {
    public TickerSymbol {
        if (value == null) {
            throw new IllegalArgumentException("Ticker symbol cannot be null.");
        }
        if (value.isBlank()) {
            throw new IllegalArgumentException("Ticker symbol cannot be blank.");
        }
    }
}
