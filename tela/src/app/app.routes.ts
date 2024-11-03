import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent 
    },
    //redirecionar para a home
    { 
        path: '**', 
        redirectTo: '' 
    },
];
