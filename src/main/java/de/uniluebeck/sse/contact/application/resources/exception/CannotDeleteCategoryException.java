package de.uniluebeck.sse.contact.application.resources.exception;

/**
 * Exception will be thrown, if a category can't be deleted.
 * 
 * @author Daniel Rickert
 */
public class CannotDeleteCategoryException extends RuntimeException {

    private static final long serialVersionUID = -4972341443164558275L;

    public CannotDeleteCategoryException() {
        super();
    }

    public CannotDeleteCategoryException(final String arg0, final Throwable arg1, final boolean arg2, final boolean arg3) {
        super(arg0, arg1, arg2, arg3);
    }

    public CannotDeleteCategoryException(final String arg0, final Throwable arg1) {
        super(arg0, arg1);
    }

    public CannotDeleteCategoryException(final String arg0) {
        super(arg0);
    }

    public CannotDeleteCategoryException(final Throwable arg0) {
        super(arg0);
    }

}
