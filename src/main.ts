import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: "./app.component.html" , 
  </h1> 
})
export class App {
  name = 'Angular';
  display = '0' ;
}

bootstrapApplication(App);
