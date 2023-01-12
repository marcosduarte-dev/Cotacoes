import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedas'
})
export class MoedasPipe implements PipeTransform {

  transform(value: number, moeda: string): unknown {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: moeda });
  }

}
