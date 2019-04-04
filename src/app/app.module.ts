import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//this is the main module it organises all the code of the app
import { AppComponent }  from './app.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }