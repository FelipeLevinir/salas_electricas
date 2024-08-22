import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  
  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "info.agro@ingeap.cl", numeroContacto: "+56 9 2388 7974"};

  NavegarFacebook(){
    window.open('https://www.facebook.com/profile.php?id=61557423617768', '_blank');
  }

  NavegarInstagram(){
    window.open('https://www.instagram.com/ingeap.agro/', '_blank');
  }

  NavegarLinkedin(){
    window.open('https://www.linkedin.com/company/ingeap-agro/', '_blank');
  }

  NavegarWhatsapp(){
    window.open('https://wa.me/56923887974', '_blank');
  }
}
