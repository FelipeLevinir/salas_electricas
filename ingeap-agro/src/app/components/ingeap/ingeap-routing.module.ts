import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngeapComponent } from './ingeap.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: IngeapComponent },
    ])],
    exports: [RouterModule]
})
export class IngeapRoutingModule { }
