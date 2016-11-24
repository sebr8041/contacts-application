package de.uniluebeck.sse.contact.application.models;

import java.util.Date;

/**
 * model for import contact.
 * is diffrent from contact mongo model because category is DBRef and not a "normal" SQL-Foreign key.
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
