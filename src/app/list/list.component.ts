import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
declare var NProgress : any

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts : Contact [] = []
  constructor(public _contactService:ContactService) { 
    //NProgress.configure({ parent: '.container' });
  }

  ngOnInit() {
    this.load()
  }
  load(){
    NProgress.start()
    this._contactService.get().subscribe(data=>{
      this.contacts=data
      console.log(this.contacts)
      NProgress.done()
    })
  }
  delete(key: string){
    this._contactService.delete(key).subscribe(resp=>{
      this._contactService.message("Contacto eliminado")
      this.load()
    })
  }

}
