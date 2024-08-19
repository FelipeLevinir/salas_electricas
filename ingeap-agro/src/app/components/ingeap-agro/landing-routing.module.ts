import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingIngeapAgroComponent } from './landing.component';
import { ContactoIngeapAgroComponent } from './contacto-ingeap-agro/contacto-ingeap-agro.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingIngeapAgroComponent },
        { path: 'contacto', component: ContactoIngeapAgroComponent },
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
