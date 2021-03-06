package de.uniluebeck.sse.contact.application.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import de.uniluebeck.sse.contact.application.models.Category;
import de.uniluebeck.sse.contact.application.models.Contact;

/**
 * Repository access to mongo contact collection
 */
public interface ContactRepository extends MongoRepository<Contact, String> {

    List<Contact> findByCategory(Category category);

    List<Contact> findByCategory(String categoryId);

}
