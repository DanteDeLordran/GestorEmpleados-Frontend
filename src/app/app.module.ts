import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarEmpleadosComponent } from './registrar-empleados/registrar-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    NavbarComponent,
    RegistrarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'empleados',
        component : ListaEmpleadosComponent
      },
      {
        path : 'registrar',
        component : RegistrarEmpleadosComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
