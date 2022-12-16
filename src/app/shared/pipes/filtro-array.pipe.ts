import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.map((val: any) => val.toLowerCase());

    return value.filter((v: any) => filter.includes(v.toLowerCase()));
  }

}
