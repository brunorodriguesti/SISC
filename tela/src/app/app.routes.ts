import { Routes } from '@angular/router';

import { InscricaoComponent } from './inscricao/inscricao.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { InscSobreComponent } from './sobre/sobre.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    //rota inscrição
    { path: 'inscricao', component: InscricaoComponent },
    { path: 'sobre', component: InscSobreComponent },
    //redirecionar para a home
    { path: '**', redirectTo: '' }
];
