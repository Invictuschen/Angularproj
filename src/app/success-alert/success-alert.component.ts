import { Component } from '@angular/core';
@Component({
  selector: 'app-success-alert',
  template: `<h1>You succeed!</h1>`,
  styles: [`h1 {
  color:green
  }`]
})

export class SuccessAlertComponent {
  // constructor() { }// constructor是必须的？
}
