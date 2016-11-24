package de.uniluebeck.sse.contact.application.models;

/**
 * Model for import catgeory. 
 * is diffrent from category model because importId != mongoId
 */
public class ImportCategory extends Category {
    
    private int importId;
    
    public ImportCategory(){
        
    }
    
    public ImportCategory(int importId, String name, String color){
        this.importId = importId;
        this.setName(name);
        this.setColor(color);
    }
    
    public void setId(int id){
        this.importId = id;
    }

    public int getImportId() {
        return importId;
    }
    
    
}
