import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-monitoreo-extraccion-agua',
  standalone: true,
  imports: [],
  templateUrl: './monitoreo-extraccion-agua.component.html',
  styleUrl: './monitoreo-extraccion-agua.component.scss'
})
export class MonitoreoExtraccionAguaComponent {
  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
  
  constructor(public layoutService: LayoutService, public router: Router){}

  navegarIngeapAgro(){
    this.router.navigate(['/ingeap-agro']);
  }

  navigateToFragment(fragment: string) {
    this.router.navigate(['/ingeap-agro'], { fragment });
  }
}
