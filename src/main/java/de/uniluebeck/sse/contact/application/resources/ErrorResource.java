package de.uniluebeck.sse.contact.application.resources;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.uniluebeck.sse.contact.application.resources.exception.CannotDeleteCategoryException;

@RestController
@ControllerAdvice
@RequestMapping("/error")
public class ErrorResource implements ErrorController {

    /**
     * Logger Instance for class
     */
    private static final Logger LOG = LoggerFactory.getLogger(ErrorController.class);

    private final ErrorAttributes errorAttributes;

    @Autowired
    public ErrorResource(final ErrorAttributes errorAttributes) {
        Assert.notNull(errorAttributes, "ErrorAttributes must not be null");
        this.errorAttributes = errorAttributes;
    }

    /**
     * path for error page/this resource
     * <p>
     *
     * @return
     */
    @Override
    public String getErrorPath() {
        return "/error";
    }

    /**
     * redirect when error occured.
     * <p>
     *
     * @param aResponse
     * @throws IOException
     */
    @RequestMapping
    public void error(final HttpServletResponse aResponse) throws IOException {
        aResponse.sendRedirect("/");
    }

    /**
     * All Exceptions will return conflict (409)
     * <p>
     *
     * @param response
     * @throws IOException
     */
    @ExceptionHandler({CannotDeleteCategoryException.class})
    void handleConflict(final HttpServletResponse response) throws IOException {
        response.sendError(HttpStatus.CONFLICT.value());
    }
}
