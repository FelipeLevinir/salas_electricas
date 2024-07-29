import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-faq-ingeap-agro',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  templateUrl: './faq-ingeap-agro.component.html',
  styleUrl: './faq-ingeap-agro.component.scss'
})
export class FaqIngeapAgroComponent {

  constructor(public layoutService: LayoutService, public router: Router) {}

  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
    
  navigateToFragment(fragment: string) {
    this.router.navigate(['/agro'], { fragment });
  }

  navegarIngeapAgro(){
    this.router.navigate(['/agro']);
}
}
