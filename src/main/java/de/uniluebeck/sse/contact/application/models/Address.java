package de.uniluebeck.sse.contact.application.models;

/**
 *
 * @author Daniel Rickert
 */
public class Address {
    
    private int postalCode;
    private String street;
    private String houseNumber;
    private String city;
    private String country;

    public Address() {
        
    }
    
    public Address(int postalCode, String street, String houseNumber, String city, String country) {
        this.postalCode = postalCode;
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
        this.country = country;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
            
    
            
}
