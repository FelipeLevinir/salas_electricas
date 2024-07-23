import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '', pathMatch: 'full' }, // Redirección por defecto
            { path: '', loadChildren: () => import('./components/ingeap/ingeap.module').then(m => m.IngeapLandingModule) },
            { path: 'ingeap-agro', loadChildren: () => import('./components/ingeap-agro/landing.module').then(m => m.IngeapAgroLandingModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
