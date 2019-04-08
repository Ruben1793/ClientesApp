import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Ruben', apellido: 'Ojeda', email: 'ruben.ojeda@gmail.com', createAt: '2017-12-11'},
    {id: 1, nombre: 'Angel', apellido: 'Gonzalez', email: 'angel.caligra@gmail.com', createAt: '2017-11-12'},
    {id: 1, nombre: 'Aaron', apellido: 'de Santiago', email: 'desatiago.aaron@gmail.com', createAt: '2017-10-11'},
    {id: 1, nombre: 'Sofia', apellido: 'Terrazas', email: 'sofia.terrazas@gmail.com', createAt: '2017-11-11'},
    {id: 1, nombre: 'Lizeth', apellido: 'Pacheco', email: 'lizeth.pacheco@gmail.com', createAt: '2017-10-13'}
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
