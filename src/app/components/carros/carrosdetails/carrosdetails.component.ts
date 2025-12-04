import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss',
})
export class CarrosdetailsComponent {
  carro: Carro = new Carro(0, '');
  router = inject(ActivatedRoute);
  router2 = inject(Router);
  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }
  findById(id: number) {
    let carroRetornado: Carro = new Carro(id, 'Carro ' + id);
    this.carro = carroRetornado;
  }
  save() {
    if (this.carro.id > 0) {
      alert('Carro editado com sucesso! ' + this.carro.nome);
      this.router2.navigate(['admin/carros'], {
        state: { carroEditado: this.carro },
      });
    } else {
      alert('Carro salvo com sucesso!');
      this.router2.navigate(['admin/carros'], {
        state: { carroNovo: this.carro },
      });
    }
  }
}
