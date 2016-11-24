package de.uniluebeck.sse.contact.application.models;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;

/**
 * Model for a category
 */
public class Category {

    @Id
    private String id;
    @NotBlank
    private String name;
    @NotBlank
    private String color;

    public Category(String id, String name, String color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    public Category() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
