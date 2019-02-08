import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { KeysFirebasePipe } from './pipes/keys-firebase.pipe';
import { UpdateComponent } from './update/update.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponent,
    ListComponent,
    KeysFirebasePipe,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
