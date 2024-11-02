import { Routes } from '@angular/router';

import { InscricaoComponent } from './inscricao/inscricao.component'
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    //rota inscrição
    { path: 'inscricao/formulario', component: InscricaoComponent },
    //redirecionar para a home
    { path: '**', redirectTo: '' }
];
