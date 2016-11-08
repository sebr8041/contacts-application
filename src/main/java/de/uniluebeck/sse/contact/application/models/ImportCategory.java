/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.uniluebeck.sse.contact.application.models;

/**
 *
 * @author brodersen
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
