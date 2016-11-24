package de.uniluebeck.sse.contact.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main
 */
@SpringBootApplication
public class Application {
    
    /**
     * where all the magic happens!
     * @param args 
     */
    public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
