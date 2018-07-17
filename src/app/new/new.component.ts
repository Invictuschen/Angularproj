import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  // templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  // template: `{{ text| summary:20}}
  // `
  template: '{{root|summary:3}}'
})
export class NewComponent {

    text= ' dd dddd dd ss ss ss s ss sss sssgg gggg gg ggg geee eee eee ee ee123456789000-9786875';
    root = 10;
}
