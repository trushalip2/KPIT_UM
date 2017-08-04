import { Pipe,PipeTransform } from '@angular/core';
import {IUser} from './user';

@Pipe({
  name: 'sort'
})
export class UserSortPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    debugger;
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}