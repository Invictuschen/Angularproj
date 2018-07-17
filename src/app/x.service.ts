import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XService {

  getCourses()
  {
    return ['iidi','The','Yeah'];
  }
}
