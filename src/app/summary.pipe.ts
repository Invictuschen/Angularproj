import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})

export class SummaryPipe implements PipeTransform {
  // transform(value: string, limit: number)
  // {
  //   if(!value){console.log('not a string')};
  //   let actualLimit = (limit)? limit:50;
  //   return value.substr(0 , actualLimit) + '...';
  // }
  transform(value: number, exponent: string) {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
