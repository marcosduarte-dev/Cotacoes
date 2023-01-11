import { Component } from '@angular/core';
import {DropdownFilterOptions} from 'primeng/dropdown';

interface Pais {
  nome: string,
  moeda: string
}


@Component({
  selector: 'app-cotacoes-duas-moedas',
  templateUrl: './cotacoes-duas-moedas.component.html',
  styleUrls: ['./cotacoes-duas-moedas.component.scss']
})
export class CotacoesDuasMoedasComponent {
  paises: Pais[];

  paisSelecionado1: Pais;
  valorMoeda1: number;

  paisSelecionado2: Pais;
  valorMoeda2: number;

  convertido: number;

  constructor() {
      this.paises = [
          {nome: 'Real', moeda: 'BRL'},
          {nome: 'Dolar', moeda: 'USD'},
          {nome: 'Euro', moeda: 'EUR'},
          {nome: 'Libra esterlina', moeda: 'GBP'},
          {nome: 'Dolar Canadense', moeda: 'CAD'},
          {nome: 'Yen', moeda: 'JPY'},
      ];

      this.valorMoeda1 = 0
      this.valorMoeda2 = 0

      this.paisSelecionado1 = this.paises[0];
      this.paisSelecionado2 = this.paises[1];

      this.convertido = 0;
  }


}
