import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
