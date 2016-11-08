/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.uniluebeck.sse.contact.application.models;

import java.util.Date;

/**
 *
 * @author brodersen
 */
public class ImportContact extends Contact {

    private  int category;

    public ImportContact() {
    }

    public ImportContact(String name, String company, String[] addresses, String[] phoneNumbers, String[] mails, Date dateOfBirth, int category) {
        super(null, name, company, addresses, phoneNumbers, mails, dateOfBirth, null);
        this.category = category;
    }

    public void setCategory(int category){
        this.category = category;
    }
    public int getCategoryId() {
        return category;
    }

}
