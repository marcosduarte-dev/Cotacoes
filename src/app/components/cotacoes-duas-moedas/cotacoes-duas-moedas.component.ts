import { Component } from '@angular/core';
import {DropdownFilterOptions} from 'primeng/dropdown';
import { timeout } from 'rxjs';
import { ExchangeRateModel } from 'src/app/models/exchenge-rate.model';
import { Rates } from 'src/app/models/rates.model';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';

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

  valores!: Rates;

  ultimoDigitado: boolean = false;

  constructor(private exchangeRateService: ExchangeRateService) {
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

  calcular(): void {

    type ObjectKey = keyof typeof this.valores;

    const valorMoeda1paraMoeda2 = this.paisSelecionado2.moeda as ObjectKey;
    const valorMoeda2paraMoeda1 = this.paisSelecionado1.moeda as ObjectKey;

    this.exchangeRateService.getBase(this.paisSelecionado1.moeda).subscribe((res) => {
      this.valores = res.rates;
    })

    setTimeout(() => {
      if(!this.ultimoDigitado) {
        this.convertido = this.valorMoeda1 * this.valores[valorMoeda1paraMoeda2];
        this.valorMoeda2 = this.convertido
      } else {
        this.convertido = this.valorMoeda2
        this.valorMoeda1 = this.valorMoeda2 / this.valores[valorMoeda1paraMoeda2];
      }
    }, 100);


  }
}
