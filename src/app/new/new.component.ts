import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  contact:Contact = new Contact("", "", true, 0)
  constructor(public _contactService:ContactService) { }

  ngOnInit() {
  }

  save(){
    this._contactService.save(this.contact)
  }
}
