package de.uniluebeck.sse.contact.application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import de.uniluebeck.sse.contact.application.models.Category;

/**
 * Repository for category collection
 */
public interface CategoryRepository extends MongoRepository<Category, String> {

}
