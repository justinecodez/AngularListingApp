
//NgModules help organize an application into cohesive blocks of functionality.
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//the customer module contains the customerComponent
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from  './shared/shared.module';

//importing the app component
import { AppComponent }  from './app.component';


//@NgModule takes a metadata object that tells Angular how to compile and run module code
@NgModule({
  imports:      [ BrowserModule, CustomersModule, SharedModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }