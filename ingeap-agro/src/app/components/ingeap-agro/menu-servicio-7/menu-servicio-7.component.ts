import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { HeaderServiciosComponent } from '../header-servicios/header-servicios.component';

@Component({
  selector: 'app-menu-servicio-7',
  standalone: true,
  imports: [HeaderComponent ,FooterComponent, ButtonModule, AccordionModule, HeaderServiciosComponent],
  templateUrl: './menu-servicio-7.component.html',
  styleUrl: './menu-servicio-7.component.scss'
})
export class MenuServicio7Component {

}
