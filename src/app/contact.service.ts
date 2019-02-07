import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  URL:string = 'https://cursos-b0929.firebaseio.com/contactos.json'
  
  constructor(private http : HttpClient) { }
  
  get() : Observable<Contact[]>{
    return this.http.get<Contact[]>(this.URL)

  }

  save(contact:Contact){
    this.http.post(this.URL, contact).subscribe(data=>console.log(data))
  }
}
