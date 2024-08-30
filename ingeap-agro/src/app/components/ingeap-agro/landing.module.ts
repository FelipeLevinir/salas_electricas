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
import { MenuServicio1Component } from './menu-servicio-1/menu-servicio-1.component';
import { MenuServicio2Component } from './menu-servicio-2/menu-servicio-2.component';
import { MenuServicio3Component } from './menu-servicio-3/menu-servicio-3.component';
import { MenuServicio4Component } from './menu-servicio-4/menu-servicio-4.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';

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
        HeaderComponent,
        MenuServicio1Component,
        MenuServicio2Component,
        MenuServicio3Component,
        MenuServicio4Component,
        RedesSocialesComponent
    ],
    declarations: [LandingIngeapAgroComponent]
})
export class IngeapAgroLandingModule { }
