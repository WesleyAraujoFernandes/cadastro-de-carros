import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {
  lista: Carro[] = [];

  constructor() {
    this.lista.push(new Carro(1, 'Fiesta'));
    this.lista.push(new Carro(2, 'Focus'));
    this.lista.push(new Carro(3, 'Fusion'));
    this.lista.push(new Carro(4, 'Ka'));
  }

  editar() {
    alert('Editar');
  }

  excluir() {
    alert('Excluir');
  }
}
