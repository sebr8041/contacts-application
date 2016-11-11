package de.uniluebeck.sse.contact.application.resources;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
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
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.uniluebeck.sse.contact.application.resources.exception.CannotDeleteCategoryException;

@RestController
@ControllerAdvice
@RequestMapping("/error")
public class ErrorResource implements ErrorController {

    private static final Logger LOG = LoggerFactory.getLogger(ErrorController.class);

    private final ErrorAttributes errorAttributes;

    @Autowired
    public ErrorResource(final ErrorAttributes errorAttributes) {
        Assert.notNull(errorAttributes, "ErrorAttributes must not be null");
        this.errorAttributes = errorAttributes;
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }

    @RequestMapping
    public Map<String, Object> error(final HttpServletRequest aRequest) {
        Map<String, Object> body = getErrorAttributes(aRequest, getTraceParameter(aRequest));
        try {
            ObjectMapper mapper = new ObjectMapper();
            LOG.error("Invalid API usage: " + mapper.writeValueAsString(body));
        } catch (JsonProcessingException ex) {
            LOG.error("Invalid API usage. Returned Error-Code.");
        }
        return body;
    }

    private boolean getTraceParameter(final HttpServletRequest request) {
        String parameter = request.getParameter("trace");
        if (parameter == null) {
            return false;
        }
        return !"false".equals(parameter.toLowerCase());
    }

    private Map<String, Object> getErrorAttributes(final HttpServletRequest aRequest, final boolean includeStackTrace) {
        RequestAttributes requestAttributes = new ServletRequestAttributes(aRequest);
        return errorAttributes.getErrorAttributes(requestAttributes, includeStackTrace);
    }

    /**
     * All Exceptions will return conflict (409)
     * <p>
     * 
     * @param response
     * @throws IOException
     */
    @ExceptionHandler({ CannotDeleteCategoryException.class })
    void handleConflict(final HttpServletResponse response) throws IOException {
        response.sendError(HttpStatus.CONFLICT.value());
    }
}