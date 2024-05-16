import { Component } from '@angular/core';
import { InscSobreComponent } from '../../sobre/sobre.component'

@Component({
  selector: 'app-admin-sobre',
  standalone: true,
  imports: [InscSobreComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class AdminSobreComponent {

}
