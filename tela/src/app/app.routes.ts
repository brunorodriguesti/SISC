import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

import { AdminComponent } from './admin/admin.component'
import { AdminCadastroComponent } from './admin-cadastro/admin-cadastro.component'
import { AdminVisualizarComponent } from './admin-visualizar/admin-visualizar.component'

export const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent 
    },
    //rota admin
    { 
        path: 'admin', 
        component: AdminComponent 
    },
    { path: 'admin/cadastrar', 
        component: AdminCadastroComponent
    },
    { path: 'admin/visualizar', 
        component: AdminVisualizarComponent
    },
    //redirecionar para a home
    { 
        path: '**', 
        redirectTo: '' 
    },
];
