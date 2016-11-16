package de.uniluebeck.sse.contact.application.resources;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.uniluebeck.sse.contact.application.models.Category;
import de.uniluebeck.sse.contact.application.models.Contact;
import de.uniluebeck.sse.contact.application.models.ImportModel;
import de.uniluebeck.sse.contact.application.repository.CategoryRepository;
import de.uniluebeck.sse.contact.application.repository.ContactRepository;

/**
 *
 * @author brodersen
 */
@CrossOrigin
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, value = "/api/import")
public class ImportJsonResource {

    @Autowired
    private ContactRepository  contactRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(method = RequestMethod.POST)
    public String importJson(@RequestBody @Valid final ImportModel importModel) {

        Map<Integer, Category> map = new HashMap<>();
        importModel.getCategories().stream().forEach(category -> map.put(category.getImportId(),
                categoryRepository.save(new Category(null, category.getName(), category.getColor()))));

        importModel.getContacts().stream().forEach(contact -> {
            contactRepository.save(new Contact(null, contact.getName(), contact.getCompany(), contact.getAddresses(), contact.getPhones(),
                    contact.getEmails(), contact.getDateOfBirth(), map.get(contact.getCategoryId())));
        });

        return "blub";

    }
}
