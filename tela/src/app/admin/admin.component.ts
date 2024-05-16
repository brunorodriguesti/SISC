import { Component } from '@angular/core';
import { FinanciadorComponent } from './financiador/financiador.component';
import { CursoComponent } from './curso/curso.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FinanciadorComponent, CursoComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
