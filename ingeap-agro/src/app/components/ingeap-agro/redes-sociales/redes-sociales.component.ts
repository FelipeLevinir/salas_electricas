import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.scss'
})
export class RedesSocialesComponent {
  informacionVisible = true;
  informacion: string = 'instagram';

  mostrarInformacion(tipo: string) {
    this.informacion = tipo;
    this.informacionVisible = true;
  }
}