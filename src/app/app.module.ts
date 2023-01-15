import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: ''
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
