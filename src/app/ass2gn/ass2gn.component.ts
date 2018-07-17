import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2gn',
  templateUrl: './ass2gn.component.html',
  styleUrls: ['./ass2gn.component.css']
})
export class Ass2gnComponent implements OnInit {
  pShow = false;
  constructor() { }
  logtime = [];
  i = 0;
  onDisplay()
  {
    this.pShow = !this.pShow;
    this.logtime.push(this.i++);
  }
  getBlue()
  {
    if (this.i >= 5 )
      return 'blue';
  }
  ngOnInit() {
  }

}
