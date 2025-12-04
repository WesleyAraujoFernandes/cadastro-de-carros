import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent {
  lista: Carro[] = [];

  constructor() {
    this.lista.push(new Carro(1, 'Fiesta'));
    this.lista.push(new Carro(2, 'Focus'));
    this.lista.push(new Carro(3, 'Fusion'));
    this.lista.push(new Carro(4, 'Ka'));

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroNovo) {
      carroNovo.id = this.lista.length + 1;
      this.lista.push(carroNovo);
    }

    if (carroEditado) {
      let index = this.lista.findIndex((c) => c.id === carroEditado.id);
      if (index !== -1) {
        this.lista[index] = carroEditado;
      }
    }
  }

  editar() {
    alert('Editar');
  }

  deleteById(carro: Carro) {
    if (confirm('Confirma a exclusão do carro ' + carro.nome + '?')) {
      let index = this.lista.findIndex((c) => c.id === carro.id);
      if (index !== -1) {
        this.lista.splice(index, 1);
      }
    }
  }
}
