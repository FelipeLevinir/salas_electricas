import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-menu-servicio-5',
  standalone: true,
  imports: [HeaderComponent ,FooterComponent, ButtonModule, AccordionModule, CarouselModule],
  templateUrl: './menu-servicio-5.component.html',
  styleUrl: './menu-servicio-5.component.scss'
})
export class MenuServicio5Component {

    imagesPluviometria: any[] = [
      {source: 'assets/ingeap-agro/aranet/1.png', alt: 'Imagen 1'},
      {source: 'assets/ingeap-agro/aranet/1.1.png', alt: 'Imagen 2'}
    ];

    imagesLUX: any[] = [
        {source: 'assets/ingeap-agro/aranet/6.png', alt: 'Imagen 1'},
        {source: 'assets/ingeap-agro/aranet/6.1.webp', alt: 'Imagen 2'},
        {source: 'assets/ingeap-agro/aranet/6.2.webp', alt: 'Imagen 3'}
    ];

    imagesTemperatura: any[] = [
        {source: 'assets/ingeap-agro/aranet/11.png', alt: 'Imagen 1'},
        {source: 'assets/ingeap-agro/aranet/11.1.jpg', alt: 'Imagen 2'},
        {source: 'assets/ingeap-agro/aranet/11.2.jpg', alt: 'Imagen 3'}
    ];

    imagesDrenaje: any[] = [
        {source: 'assets/ingeap-agro/aranet/5.png', alt: 'Imagen 1'},
        {source: 'assets/ingeap-agro/aranet/5.1.png', alt: 'Imagen 2'}
    ];

    imagesMovimientoSavia: any[] = [
        {source: 'assets/ingeap-agro/aranet/3.png', alt: 'Imagen 1'},
        {source: 'assets/ingeap-agro/aranet/3.1.png', alt: 'Imagen 2'}
    ];

    imagesSensorTHR: any[] = [
        {source: 'assets/ingeap-agro/aranet/8.png', alt: 'Imagen 1'}
    ];

    imagesSuelo: any[] = [
      {source: 'assets/ingeap-agro/aranet/9.webp', alt: 'Imagen 1'},
      {source: 'assets/ingeap-agro/aranet/9.1.png', alt: 'Imagen 2'}
    ];

    imagesCO2: any[] = [
      {source: 'assets/ingeap-agro/aranet/4.png', alt: 'Imagen 1'},
      {source: 'assets/ingeap-agro/aranet/4.1.webp', alt: 'Imagen 2'},
      {source: 'assets/ingeap-agro/aranet/4.2.webp', alt: 'Imagen 3'}
    ];

    imagesPeso: any[] = [
      {source: 'assets/ingeap-agro/aranet/2.png', alt: 'Imagen 1'},
      {source: 'assets/ingeap-agro/aranet/2.1.webp', alt: 'Imagen 2'},
      {source: 'assets/ingeap-agro/aranet/2.2.png', alt: 'Imagen 3'}
    ];

    imagesDGA: any[] = [
        {source: 'assets/ingeap-agro/aranet/12.png', alt: 'Imagen 1'},
        {source: 'assets/ingeap-agro/aranet/1.png', alt: 'Imagen 2'}
    ];

    imagesPAR: any[] = [
      {source: 'assets/ingeap-agro/aranet/7.png', alt: 'Imagen 1'},
      {source: 'assets/ingeap-agro/aranet/7.1.png', alt: 'Imagen 2'}
    ];

    imagesDGA2: any[] = [
      {source: 'assets/ingeap-agro/aranet/10.webp', alt: 'Imagen 1'},
      {source: 'assets/ingeap-agro/aranet/10.1.webp', alt: 'Imagen 2'}
    ];

}
