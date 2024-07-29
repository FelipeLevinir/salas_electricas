import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
  selector: 'app-control-riego',
  standalone: true,
  imports: [],
  templateUrl: './control-riego.component.html',
  styleUrl: './control-riego.component.scss'
})
export class ControlRiegoComponent {
  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
    
  constructor(public layoutService: LayoutService, public router: Router){}

  navegarIngeapAgro(){
    this.router.navigate(['/agro']);
  }

  navigateToFragment(fragment: string) {
    this.router.navigate(['/agro'], { fragment });
  }
}
