import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-diminucion-costos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './diminucion-costos.component.html',
  styleUrl: './diminucion-costos.component.scss'
})
export class DiminucionCostosComponent {
  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
    
  constructor(public layoutService: LayoutService, public router: Router){}

  navegarIngeapAgro(){
    this.router.navigate(['/agro']);
  }

  navigateToFragment(fragment: string) {
    this.router.navigate(['/agro'], { fragment });
  }
}
