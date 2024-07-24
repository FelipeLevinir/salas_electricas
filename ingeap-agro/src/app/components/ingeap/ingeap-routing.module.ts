import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngeapComponent } from './ingeap.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: IngeapComponent },
        { path: 'contacto', component: ContactoComponent },
    ])],
    exports: [RouterModule]
})
export class IngeapRoutingModule { }
