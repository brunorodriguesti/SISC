import { Routes } from '@angular/router';
import { CandidatosComponent } from './candidatos/candidatos.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SobreComponent } from './sobre/sobre.component'
import { InscricaoComponent } from './inscricao/inscricao.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'inscricao', component: InscricaoComponent },
    { path: 'candidatos', component: CandidatosComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '**', redirectTo: '' }
];
