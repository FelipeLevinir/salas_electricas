import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-estamos-trabajando',
  templateUrl: './estamos-trabajando.component.html',
  styleUrl: './estamos-trabajando.component.scss'
})
export class EstamosTrabajandoComponent {

  constructor(private router: Router) { }
  
  navegarIngeap(){
    this.router.navigate(['/ingeap']);
}
}
