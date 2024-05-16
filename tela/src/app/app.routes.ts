import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component'
import { CandidatosComponent } from './admin/candidatos/candidatos.component'
import { AdminSobreComponent } from './admin/sobre/sobre.component'

import { InscricaoComponent } from './inscricao/inscricao.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { InscSobreComponent } from './sobre/sobre.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    //rota admin
    { path: 'admin', component: AdminComponent },
    { path: 'admin/candidatos', component: CandidatosComponent },
    { path: 'admin/sobre', component: AdminSobreComponent },
    //rota inscrição
    { path: 'inscricao', component: InscricaoComponent },
    { path: 'sobre', component: InscSobreComponent },
    //redirecionar para a home
    { path: '**', redirectTo: '' }
];
