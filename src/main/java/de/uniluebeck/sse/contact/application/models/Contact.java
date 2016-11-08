package de.uniluebeck.sse.contact.application.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 *
 * @author Daniel Rickert
 */
public class Contact {

    @Id
    private String id;
    @NotBlank
    private String name;
    @NotBlank
    private String company;
    @NotNull
    private String[] addresses;
    @NotNull
    private String[] phones;
    @NotNull
    private String[] emails;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private Date dateOfBirth;
    @DBRef
    @NotNull
    private Category category;

    public Contact(String id, String name, String company, String[] addresses, String[] phones, String[] emails, Date dateOfBirth, Category category) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.addresses = addresses;
        this.phones = phones;
        this.emails = emails;
        this.dateOfBirth = dateOfBirth;
        this.category = category;
    }

   
    public Contact(){
        
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String[] getAddresses() {
        return addresses;
    }

    public void setAddresses(String[] addresses) {
        this.addresses = addresses;
    }

    public String[] getPhones() {
        return phones;
    }

    public void setPhones(String[] phones) {
        this.phones = phones;
    }

    public String[] getEmails() {
        return emails;
    }

    public void setEmails(String[] emails) {
        this.emails = emails;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
    
    
    
}