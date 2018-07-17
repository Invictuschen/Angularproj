import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {


  model = { name : 'waht the huak', cal: 'ddd'};
  constructor() { }

  ngOnInit() {
  }

}
