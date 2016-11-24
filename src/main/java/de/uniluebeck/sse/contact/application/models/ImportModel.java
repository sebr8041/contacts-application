package de.uniluebeck.sse.contact.application.models;

import java.util.List;
import javax.validation.constraints.NotNull;

/**
 * Model for data import from json.
 * @author brodersen
 */
public class ImportModel {
    
    @NotNull
    private List<ImportCategory> categories;
    @NotNull
    private List<ImportContact> contacts;

    public List<ImportCategory> getCategories() {
        return categories;
    }

    public List<ImportContact> getContacts() {
        return contacts;
    }
    
    
}
