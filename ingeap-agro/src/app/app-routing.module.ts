import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'ingeap-agro', pathMatch: 'full' }, // Redirección por defecto
            { path: 'ingeap-agro', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
