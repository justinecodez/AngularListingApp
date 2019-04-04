import { Component, OnInit } from '@angular/core';
//@component decoratar contains the meta data of the component
@Component({ 
  selector: 'app-root',
  template: `
    <h1>{{hello}}</h1>
  `
})
export class AppComponent implements OnInit {
    hello: string;
  constructor() { }

  ngOnInit() {
      this.hello = 'Hello world from databinding'

  }
  
}