import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  key:string = ""
  contact:Contact = new Contact("", "", true, 0)
  constructor(public _contactService:ContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.key = params['id']
      this._contactService.getContact(this.key)
        .subscribe((contact:Contact)=>{
          this.contact = contact
        })
    });
  }

  update(){
    this._contactService.update(this.contact, this.key).then(()=>{
      this.router.navigate(['/contacts'])
    })
    
  }

}
