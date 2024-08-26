import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingIngeapAgroComponent } from './landing.component';
import { ContactoIngeapAgroComponent } from './contacto-ingeap-agro/contacto-ingeap-agro.component';
import { MenuServicio1Component } from './menu-servicio-1/menu-servicio-1.component';
import { MenuServicio2Component } from './menu-servicio-2/menu-servicio-2.component';
import { MenuServicio3Component } from './menu-servicio-3/menu-servicio-3.component';
import { MenuServicio4Component } from './menu-servicio-4/menu-servicio-4.component';
import { MenuServicio5Component } from './menu-servicio-5/menu-servicio-5.component';
import { MenuServicio6Component } from './menu-servicio-6/menu-servicio-6.component';
import { MenuServicio7Component } from './menu-servicio-7/menu-servicio-7.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingIngeapAgroComponent },
        { path: 'contacto', component: ContactoIngeapAgroComponent },
        { path: 'gestion-riego', component: MenuServicio1Component },
        { path: 'paneles-fotovoltaicos', component: MenuServicio2Component },
        { path: 'monitoreo-extraccion-agua', component: MenuServicio3Component },
        { path: 'monitoreo-riego', component: MenuServicio4Component },
        { path: 'aranet', component: MenuServicio5Component },
        { path: 'telemetria', component: MenuServicio6Component },
        { path: 'control-heladas', component: MenuServicio7Component },
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
