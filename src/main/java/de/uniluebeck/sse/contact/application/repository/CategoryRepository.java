package de.uniluebeck.sse.contact.application.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import de.uniluebeck.sse.contact.application.models.Category;

/**
 *
 * @author Daniel Rickert
 */
public interface CategoryRepository extends MongoRepository<Category, String> {

}
