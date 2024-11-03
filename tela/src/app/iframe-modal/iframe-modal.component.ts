import { Component } from '@angular/core';
import { InscricaoComponent } from '../inscricao/inscricao.component';

@Component({
  selector: 'app-iframe-modal',
  standalone: true,
  imports: [
    InscricaoComponent,
  ],
  templateUrl: './iframe-modal.component.html',
  styleUrl: './iframe-modal.component.scss'
})
export class IframeModalComponent {

}
