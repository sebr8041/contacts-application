package de.uniluebeck.sse.contact.application.resources;

import java.util.List;
import javax.validation.Valid;
import org.apache.commons.lang3.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import de.uniluebeck.sse.contact.application.models.Contact;
import de.uniluebeck.sse.contact.application.repository.ContactRepository;

/**
 * <p>
 * RestController for Contacts
 * </p>
 * 
 * @author Daniel Rickert
 */
@CrossOrigin
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, value = "/api/contact")
public class ContactResource {

    /**
     * dependency injection for ContactRepository
     */
    @Autowired
    private ContactRepository contactRepository;

    /**
     * returns all contacts from collection
     * @return 
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    /**
     * return one contact
     * @param id mongo serial id as HEX string
     * @return 
     */
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Contact getById(@PathVariable("id") final String id) {
        Validate.notBlank(id);
        return contactRepository.findOne(id);
    }

    /**
     * creates a new contact
     * @param contact
     * @return 
     */
    @RequestMapping(method = RequestMethod.POST)
    public Contact addNewContact(@RequestBody @Valid final Contact contact) {
        Validate.notNull(contact);
        return contactRepository.insert(contact);
    }

    /**
     * update an existsing contact
     * @param contact
     * @return 
     */
    @RequestMapping(method = RequestMethod.PUT)
    public Contact updateContext(@RequestBody @Valid final Contact contact) {
        Validate.notNull(contact);
        return contactRepository.save(contact);
    }

    /**
     * deletes an existing contact.
     * @param id 
     */
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteContact(@PathVariable("id") final String id) {
        contactRepository.delete(id);
    }
}
