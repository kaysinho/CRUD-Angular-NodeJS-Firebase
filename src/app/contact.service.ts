import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';

declare var Swal: any;
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  URL:string = '/contactos.json'
  
  constructor(private http : HttpClient) { }
  
  get() : Observable<Contact[]>{
    return this.http.get<Contact[]>(this.URL)
  }

  getContact(key:string):Observable<Contact>{
    return this.http.get<Contact>(this.URL.replace('.json',('/' + key+'.json')))
  }

  save(contact:Contact){
    this.http.post(this.URL, contact)
      .subscribe(data=>{
        console.log(data)
        this.message("Contacto creado")
      })
  }

  update(contact:Contact, key:string):Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.http.put(this.URL.replace('.json',('/' + key+'.json')), contact)
      .subscribe(data=>{
        resolve(true)
        this.message("Contacto actualizado")
      })
    })
    
  }

  delete(key:string) : Observable<any>{
    return this.http.delete(this.URL.replace('.json',('/' + key+'.json')))
  }

  message(text:string){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
