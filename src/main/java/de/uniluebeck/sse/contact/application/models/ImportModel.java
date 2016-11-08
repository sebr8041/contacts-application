/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
