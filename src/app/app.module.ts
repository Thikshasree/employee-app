import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpdialogComponent } from './empdialog/empdialog.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpdialogComponent,
    ConfirmdialogComponent
  ],
  entryComponents:[EmpdialogComponent, ConfirmdialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
