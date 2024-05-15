import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AdminComponent } from './admin/admin.component'
import { InscricaoComponent } from './inscricao/inscricao.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'inscricao', component: InscricaoComponent },
    { path: 'inscricao', loadChildren: () => import('./inscricao/inscricao.component').then(m => m.InscricaoComponent) },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting { }