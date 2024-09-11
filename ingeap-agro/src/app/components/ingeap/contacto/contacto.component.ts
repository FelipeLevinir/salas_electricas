import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; // Importar SweetAlert
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  constructor(public layoutService: LayoutService, public router: Router) {}

  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
  
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSending: boolean = false; 

  navigateToFragment(fragment: string) {
    this.router.navigate(['/home'], { fragment });
  }

  navegarIngeap(){
      this.router.navigate(['/home']);
  }

  public async EnviarMail() {
    this.isSending = true; // Deshabilitar botón mientras se envía el correo

    try {
      const result: EmailJSResponseStatus = await emailjs.send('service_4qlgrjo', 'template_kk6cdvn', {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
        reply_to: this.formData.email
      }, 'RXcaETsyIjXUyOMNC');
      
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: 'Tu mensaje ha sido enviado correctamente.',
        confirmButtonText: 'Aceptar'
      });

      this.limpiarFormulario();
    } catch (error) {
      console.error(error.text);
      
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
        confirmButtonText: 'Aceptar'
      });
    } finally {
      this.isSending = false; // Rehabilitar el botón después de enviar
    }
  }

  public limpiarFormulario() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
