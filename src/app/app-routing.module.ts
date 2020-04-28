import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes = [
{path: '',redirectTo: '/emp-details',pathMatch:'full'},
{path: 'emp-details',component: EmpDetailsComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
