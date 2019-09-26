import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from './contact';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public getContacts(){
    return this.httpClient.get('http://localhost:3000/api/contacts')        
  }

  public addContacts(newContact){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post('http://localhost:3000/api/contact', newContact, {headers: headers});        
  }

  public deleteContacts(id){
    return this.httpClient.delete('http://localhost:3000/api/contact/'+ id);        
  }
}
