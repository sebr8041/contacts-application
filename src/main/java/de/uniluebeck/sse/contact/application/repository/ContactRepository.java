package de.uniluebeck.sse.contact.application.repository;

import de.uniluebeck.sse.contact.application.models.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Daniel Rickert
 */
public interface ContactRepository extends MongoRepository<Contact, String> {

}
