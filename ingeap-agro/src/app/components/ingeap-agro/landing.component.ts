import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingIngeapAgroComponent implements OnInit {

    products = [
        {
            name: 'Sistema de Gestion de Riego',
            detalle:'Conoce el estado de tus suelos en tiempo real y optimiza el uso de agua en tu campo.',
            image: 'assets/ingeap/1.jpg'
        },
        {
            name: 'Paneles fotovoltaicos',
            detalle:'Disminuye tus costos energéticos mediante el uso de energías renovables.',
            image: 'assets/ingeap/2.jpg'
        },
        {
            name: 'Automatización de riego',
            detalle:'Moderniza tu campo, y obtiene una mejor gestión hídrica.',
            image: 'assets/ingeap/3.jpg'
        },
        // {
        //     name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        //     detalle:'',
        //     image: 'assets/ingeap/4.png'
        // },
        {
            name: 'Monitoreo de extracción de agua',
            detalle:'Evita multas por la cantidad de agua extraída de tu pozo. (Decreto N°1238)',
            image: 'assets/ingeap/5.png'
        }
    ];

    topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
    
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

    ngOnInit() {
        
    }
}
