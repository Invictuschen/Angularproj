import { Component } from '@angular/core';

@Component({
  selector: 'app-ass1gn',
  templateUrl: './ass1gn.component.html',
  styleUrls: ['./ass1gn.component.css']
})
export class Ass1gnComponent {
  Username = '';
  Buttonshow = true;
  constructor() { }
  changeShow()
  {
    if(this.Username !== '')
    this.Buttonshow = false;
    else
      this.Buttonshow = true;
  }
  emptyShow()
  {
    this.Username = '';
    this.Buttonshow = true;
  }
}
