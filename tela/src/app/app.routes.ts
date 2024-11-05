import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

import { AdminComponent } from './admin/admin.component'

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
    // { path: 'admin/cadastrar', 
    //     component:  
    // },
    // { path: 'admin/visualizar', 
    //     component:  
    // },
    //redirecionar para a home
    { 
        path: '**', 
        redirectTo: '' 
    },
];
