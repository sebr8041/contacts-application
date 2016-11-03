package de.uniluebeck.sse.contact.application.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.data.annotation.Id;

/**
 *
 * @author Daniel Rickert
 */
public class Contact {

    @Id
    private String id;
    private String name;
    private String company;
    private Address[] address;
    private String[] phoneNumber;
    private String[] email;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateOfBirth;

    public Contact() {
    }

    public Contact(String id, String name, String company, Address[] address, String[] phoneNumber, String[] email, Date dateOfBirth) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
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

    public Address[] getAddress() {
        return address;
    }

    public void setAddress(Address[] address) {
        this.address = address;
    }

    public String[] getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String[] phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String[] getEmail() {
        return email;
    }

    public void setEmail(String[] email) {
        this.email = email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

}
