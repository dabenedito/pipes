import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let values: Array<any> = value.split(' ');
    values = values.map(string => string.substring(0, 1).toUpperCase() + string.substring(1));

    return values.join(' ');
  }

}
