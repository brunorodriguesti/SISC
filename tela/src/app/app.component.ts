import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {HomeComponent} from './inscricao/nav/nav.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatSlideToggleModule,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}