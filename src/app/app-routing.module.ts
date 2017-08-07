import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'users', loadChildren: './users/users.module#usersModule'},
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
