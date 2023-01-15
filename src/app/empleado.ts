export class Empleado {

    idEmpleado : number;
    nombreEmpleado : string;
    apellidoEmpleado : string;
    emailEmpleado : string;

    constructor(idEmpleado: number, nombreEmpleado: string, apellidoEmpleado: string, emailEmpleado: string){
        this.idEmpleado = idEmpleado;
        this.nombreEmpleado = nombreEmpleado;
        this.apellidoEmpleado = apellidoEmpleado;
        this.emailEmpleado = emailEmpleado;
    }

}
