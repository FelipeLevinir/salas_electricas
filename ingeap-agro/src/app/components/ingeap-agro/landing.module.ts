import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingIngeapAgroComponent } from './landing.component';
import { FaqIngeapAgroComponent } from './faq-ingeap-agro/faq-ingeap-agro.component';
import { ContactoIngeapAgroComponent } from './contacto-ingeap-agro/contacto-ingeap-agro.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CarouselModule,
        FaqIngeapAgroComponent,
        ContactoIngeapAgroComponent
    ],
    declarations: [LandingIngeapAgroComponent]
})
export class LandingModule { }
