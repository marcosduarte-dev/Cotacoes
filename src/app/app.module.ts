import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotacoesDuasMoedasComponent } from './components/cotacoes-duas-moedas/cotacoes-duas-moedas.component';

@NgModule({
  declarations: [
    AppComponent,
    CotacoesDuasMoedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
