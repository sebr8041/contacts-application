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
import de.uniluebeck.sse.contact.application.models.Category;
import de.uniluebeck.sse.contact.application.models.Contact;
import de.uniluebeck.sse.contact.application.repository.CategoryRepository;
import de.uniluebeck.sse.contact.application.repository.ContactRepository;
import de.uniluebeck.sse.contact.application.resources.exception.CannotDeleteCategoryException;

/**
 * <p>
 * Category controller for REST requests.
 * </p>
 * 
 * includes getAll, getOne, post, put, delete, getAllContactsFromCategory
 */
@CrossOrigin
@RestController
@RequestMapping(value = "/api/category", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class CategoryResource {

    /**
     * dependency injection for CategoryRepository.
     */
    @Autowired
    private CategoryRepository categoryRepository;

    /**
     * dependency injection for ContactRepository.
     */
    @Autowired
    private ContactRepository contactRepository;

    /**
     * returns all categories
     *
     * @return
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<Category> getAllCategoriess() {
        return categoryRepository.findAll();
    }

    /**
     * returns one category.
     *
     * @param id mongo-serial in HEX
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Category getById(@PathVariable("id") final String id) {
        Validate.notBlank(id);
        return categoryRepository.findOne(id);
    }

    /**
     * create a new category in collection.
     *
     * @param category
     * @return
     */
    @RequestMapping(method = RequestMethod.POST)
    public Category addNewCategoryt(@RequestBody @Valid final Category category) {
        Validate.notNull(category);
        return categoryRepository.insert(category);
    }

    /**
     * updates existing category
     *
     * @param category
     * @return
     */
    @RequestMapping(method = RequestMethod.PUT)
    public Category updateContext(@RequestBody @Valid final Category category) {
        Validate.notNull(category);
        return categoryRepository.save(category);
    }

    /**
     * <p>
     * delete an existing category from collection.
     * </p>
     *
     * delteable only when category is empty (no contact has this category)
     *
     * @param id
     */
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteCategory(@PathVariable("id") final String id) {
        if (!contactRepository.findByCategory(id).isEmpty()) {
            throw new CannotDeleteCategoryException("The category is not empty!");
        }
        categoryRepository.delete(id);
    }

    /**
     * returns all contacts from a category.
     *
     * @param id mongo serial HEX id.
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/{id}/contact")
    public List<Contact> getAllContactsOfCategory(@PathVariable("id") final String id) {
        return contactRepository.findByCategory(id);
    }
}
