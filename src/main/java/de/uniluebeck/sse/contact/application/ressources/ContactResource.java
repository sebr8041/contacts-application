package de.uniluebeck.sse.contact.application.ressources;

import de.uniluebeck.sse.contact.application.models.Contact;
import de.uniluebeck.sse.contact.application.repository.ContactRepository;
import java.util.List;
import org.apache.commons.lang3.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Daniel Rickert
 */
@CrossOrigin
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, value = "/api/contact")
public class ContactResource {

    @Autowired
    private ContactRepository contactRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Contact getById(@PathVariable("id") final String id) {
        Validate.notBlank(id);
        return contactRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Contact addNewContact(@RequestBody Contact contact) {
        Validate.notNull(contact);
        return contactRepository.insert(contact);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Contact updateContext(@RequestBody Contact contact) {
        Validate.notNull(contact);
        return contactRepository.save(contact);
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteContact(@PathVariable("id") final String id) {
        contactRepository.delete(id);
        // TODO add logic to remove contact from all of its companies!
    }
}