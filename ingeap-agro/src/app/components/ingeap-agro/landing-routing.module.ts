import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingIngeapAgroComponent } from './landing.component';
import { ContactoIngeapAgroComponent } from './contacto-ingeap-agro/contacto-ingeap-agro.component';
import { ControlRiegoComponent } from './control-riego/control-riego.component';
import { DiminucionCostosComponent } from './diminucion-costos/diminucion-costos.component';
import { GestionRiegoComponent } from './gestion-riego/gestion-riego.component';
import { MonitoreoExtraccionAguaComponent } from './monitoreo-extraccion-agua/monitoreo-extraccion-agua.component';
import { FaqIngeapAgroComponent } from './faq-ingeap-agro/faq-ingeap-agro.component';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingIngeapAgroComponent },
        { path: 'faq', component: FaqIngeapAgroComponent },
        { path: 'contacto', component: ContactoIngeapAgroComponent },
        { path: 'control-riego', component: ControlRiegoComponent },
        { path: 'diminucion-costos', component: DiminucionCostosComponent },
        { path: 'gestion-riego', component: GestionRiegoComponent },
        { path: 'monitoreo-extraccion-agua', component: MonitoreoExtraccionAguaComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
