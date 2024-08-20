import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(public router: Router) { }

  ngOnInit(): void {
      
  }

  navigateToFragment(fragment: string) {
    this.router.navigate(['/home'], { fragment });
  }

  navegarIngeapAgro(){
      this.router.navigate(['/agro']);
  }

  navegarIngeap(){
      this.router.navigate(['/home']);
  }

  navegarSalas(){
      this.router.navigate(['/pagina-en-construccion']);
  }

}
