import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { SobreComponent } from './sobre/sobre.component'

const routes: Routes = [
    { path: 'inscricao/home', component: DashboardComponent },
    { path: 'inscricao/sobre', component: SobreComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingInscricao { }
