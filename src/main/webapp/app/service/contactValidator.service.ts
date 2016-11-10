import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IContact } from '../models/contact';
import { HttpService } from './http.service'
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ContactValidatorService {



    public validate(contact: IContact): string[] {
        let errors = [];

        if (contact.name === undefined || contact.name === null || contact.name.length === 0){
            errors.push("Bitte geben Sie einen Namen für den Kontakt an.");
        }

        if (contact.company === undefined || contact.company === null || contact.company.length === 0){
            errors.push("Bitte geben Sie eine Firma für den Kontakt an.");
        }

        if (contact.dateOfBirth === undefined || contact.dateOfBirth === null || contact.dateOfBirth.length === 0){
            errors.push("Bitte geben Sie ein Geburtsdatum für den Kontakt an.");
        }
        return errors;
    }



} 