package de.uniluebeck.sse.contact.application.models;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 *
 * @author Daniel Rickert
 */
public class Category {

    @Id
    private String id;
    private String color;
    @DBRef
    private List<Contact> contacts;

    public Category() {
    }

    public Category(String id, String color, List<Contact> contacts) {
        this.id = id;
        this.color = color;
        this.contacts = contacts;
    }
    
    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    
    
}
