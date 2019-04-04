import { Component, OnInit } from '@angular/core';
//@component decoratar contains the meta data of the component
@Component({ 
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
}