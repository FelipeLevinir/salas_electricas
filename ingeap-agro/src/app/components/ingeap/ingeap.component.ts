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
        name: 'Sistema de Gestion de Riego',
        detalle:'Conoce el estado de tus suelos en tiempo real y optimiza el uso de agua en tu campo.',
        image: 'assets/ingeap/bg-image-1.jpg'
    },
    // {
    //     name: 'Paneles fotovoltaicos',
    //     detalle:'Disminuye tus costos energéticos mediante el uso de energías renovables.',
    //     image: 'assets/ingeap/bg-image-2.jpg'
    // },
    {
        name: 'Automatización de riego',
        detalle:'Moderniza tu campo, y obtiene una mejor gestión hídrica.',
        image: 'assets/ingeap/bg-image-3.jpg'
    },
    // {
    //   name: 'Automatización de riego',
    //   detalle:'Moderniza tu campo, y obtiene una mejor gestión hídrica.',
    //   image: 'assets/ingeap/bg-image-4.jpg'
    // },
    {
        name: 'Monitoreo de extracción de agua',
        detalle:'Evita multas por la cantidad de agua extraída de tu pozo. (Decreto N°1238)',
        image: 'assets/ingeap/bg-image-5.jpg'
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

}
