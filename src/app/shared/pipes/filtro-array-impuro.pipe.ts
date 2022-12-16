import { Pipe } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro'
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

  override transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
