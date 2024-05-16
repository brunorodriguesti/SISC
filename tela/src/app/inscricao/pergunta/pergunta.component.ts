import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PerguntaService } from './pergunta.service';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pergunta.component.html',
  styleUrl: './pergunta.component.scss'
})
export class PerguntaComponent {

}
