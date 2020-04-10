import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
