import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MenuComponent } from '../menu/menu.component';

interface Section {
  heading: string;
  text: string;
  image: string;
}

interface DashboardContent {
  title: string;
  subtitle: string;
  sections: Section[];
  buttons: { text: string; action: string }[];
}

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  imports: [ 
    MenuComponent,
    CommonModule, 
  ],
})
export class AdminComponent  implements OnInit {
  content: DashboardContent | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<DashboardContent>('assets/content.json').subscribe((data) => {
      this.content = data;
    });
  }

  openCourses() {
    console.log('Clicado...')
  }
}