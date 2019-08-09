import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { TopoComponent } from './topo/topo.component';
import { NumbersComponent } from './numbers/numbers.component';
import { SinaisComponent } from './sinais/sinais.component';
import { UtilidadesComponent } from './utilidades/utilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    TopoComponent,
    NumbersComponent,
    SinaisComponent,
    UtilidadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
