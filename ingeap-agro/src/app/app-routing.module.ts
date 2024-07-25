import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { EstamosTrabajandoComponent } from './components/estamos-trabajando/estamos-trabajando.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'ingeap', pathMatch: 'full' }, // Redirección por defecto
            { path: 'ingeap', loadChildren: () => import('./components/ingeap/ingeap.module').then(m => m.IngeapLandingModule) },
            { path: 'ingeap-agro', loadChildren: () => import('./components/ingeap-agro/landing.module').then(m => m.IngeapAgroLandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'pagina-en-construccion', component: EstamosTrabajandoComponent},
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
