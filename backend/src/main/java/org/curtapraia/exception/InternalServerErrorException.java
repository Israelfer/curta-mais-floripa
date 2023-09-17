package org.curtapraia.exception;

public class InternalServerErrorException extends RuntimeException {
    public InternalServerErrorException() {
        super("We are currently experiencing technical difficulties. Please try again later.");
    }
}