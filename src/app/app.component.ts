//we import the Component and OnInit methods so that we can use them,
import { Component, OnInit } from '@angular/core';


/*@Component is known as a decorator. Decorators are special pieces of syntax that configure elements like components. 
The decorator above tells Angular that the code following it defines a new component 
and should therefore have the functionalities outlined by Angular's own Component code imported at the top of the file. 

selector: 'app-root' defines what tag corresponds with the component. 
Because we want this root component rendered within the <app-root></app-root> tags in index.html,
 the component's selector property must also be app-root. 
A component's selector determines what its corresponding tags will look like.

The template portion (above) provides the HTML that will be displayed wherever the component is placed. 
Because we've defined our root component's selector property as app-root, 
the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. 
We placed ours directly in the <body> tags of index.html. 
So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags.

*/
@Component({ 

  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
  
}