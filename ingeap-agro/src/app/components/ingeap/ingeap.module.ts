import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngeapRoutingModule } from './ingeap-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { IngeapComponent } from './ingeap.component';

@NgModule({
    imports: [
        CommonModule,
        IngeapRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CarouselModule,
    ],
    declarations: [IngeapComponent]
})
export class IngeapLandingModule { }
