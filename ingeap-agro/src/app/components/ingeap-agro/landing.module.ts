import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingIngeapAgroComponent } from './landing.component';
import { ContactoIngeapAgroComponent } from './contacto-ingeap-agro/contacto-ingeap-agro.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

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
        ContactoIngeapAgroComponent,
        InputTextModule,
        InputTextareaModule,
        FooterComponent,
        HeaderComponent
    ],
    declarations: [LandingIngeapAgroComponent]
})
export class IngeapAgroLandingModule { }
