import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: any;
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactService: ContactService) { }

  addContact(){
    const newContact={
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContacts(newContact)
      .subscribe(contact=> {
        this.contacts.push(contact);
        this.contactService.getContacts().subscribe((data)=>{
          console.log("hello")
          console.log(data);
          this.contacts=data;
          console.log(this.contacts);
        })
      });
  }

  deleteContact(id:any){
      var contacts = this.contacts;
      this.contactService.deleteContacts(id)
        .subscribe(data=>{
         
            for(var i =0; i<contacts.length;i++){
              if(contacts[i]._id==id){
                contacts.splice(1,1);
              }
            }
          
        })
  }

  ngOnInit() {

    this.contactService.getContacts().subscribe((data)=>{
      console.log("hello")
      console.log(data);
      this.contacts=data;
      console.log(this.contacts);
    })
  }

  
  
  

}
