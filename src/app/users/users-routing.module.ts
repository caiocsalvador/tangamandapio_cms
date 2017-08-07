import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { UsersComponent } from './users.component';

const usersRoutes: Routes = [
    { path: '', component: UsersComponent, children: [
		{ path: '', component: UsersComponent },
		/*{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
		{ path: ':id', component: RecipeDetailComponent },
		{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },*/
	] },
];

@NgModule({
    imports: [ RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})
export class UsersRoutingModule{

}
