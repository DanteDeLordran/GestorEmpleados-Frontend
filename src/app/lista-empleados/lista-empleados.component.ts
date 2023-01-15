import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  empleados : Empleado[] = [];

  constructor( private empleadoService : EmpleadoService ){}

  ngOnInit() : void{
    this.getEmployees();
  }

  private getEmployees(){
    this.empleadoService.getEmployeeList().subscribe( data => {
      this.empleados = data;
    });
  }

}
