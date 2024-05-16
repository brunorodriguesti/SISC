import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
