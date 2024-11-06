import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-admin-visualizar',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
  ],
  templateUrl: './admin-visualizar.component.html',
  styleUrl: './admin-visualizar.component.scss'
})
export class AdminVisualizarComponent {

}
