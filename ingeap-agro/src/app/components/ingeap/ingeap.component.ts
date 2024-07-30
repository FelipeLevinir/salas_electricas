import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-ingeap',
  templateUrl: './ingeap.component.html',
  styleUrl: './ingeap.component.scss'
})
export class IngeapComponent implements OnInit{

  products = [
    {
        name: 'Experiencia',
        detalle:'Más de 25 años de experiencia en proyectos de ingeniería y montaje eléctricos industriales.',
        image: 'assets/ingeap/carrusel/1.jpeg'
    },
    {
        name: 'Solución integral',
        detalle:'Ofrecemos una solución integral desde la ingeniería y diseño hasta el montaje. Áreas de especialización: Contamos con ingenieros y profesionales de las área eléctrica,  electrónica, mecánica y de automatización.',
        image: 'assets/ingeap/carrusel/2.JPG'
    },
    {
        name: 'Principales clientes',
        detalle:'Trabajamos para importantes actores del país en el área industrial y de minería con faenas permanentes en la primera y segunda región de Chile',
        image: 'assets/ingeap/carrusel/3.jpeg'
    },
    {
      name: 'Empresa en expansión',
      detalle:'Nos encontramos continuamente adaptando a las nuevas tecnologías y a los cambios  en el mercado. Actualmente contamos con el dominio de “Salas eléctricas Chile” y nos expandimos al área agrícola con Ingeap Agro.',
      image: 'assets/ingeap/carrusel/4.jpeg'
    },
    {
        name: 'Integradores oficiales de Schneider Electric',
        detalle:'Contamos con el apoyo de la fabrica para realizar proyectos de mayor envergadura.',
        image: 'assets/ingeap/carrusel/5.jpeg'
    }
];

topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Atención/ ventas@ingeap.cl", numeroContacto: "+56 9 7517 5359"};

responsiveOptions: any[] = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];


  constructor(public layoutService: LayoutService, public router: Router) { }

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
