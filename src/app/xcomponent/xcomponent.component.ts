import { Component } from '@angular/core';
import {XService} from '../x.service';

@Component({
  selector: 'x-component',
  // template:'<h1 style="color:green">Courses</h1>'
  template: '<h2>{{getTitle()}}</h2><ul><li *ngFor="let course of courses">{{course}}</li></ul>'
})
export class XcomponentComponent {
  title = 'List of courses';
  getTitle() {
    return this. title;
  }
  courses;
  constructor(private service: XService) // dependency on Xservice
  // constructor to add service
  {
    this.courses= service.getCourses();
  }
}
