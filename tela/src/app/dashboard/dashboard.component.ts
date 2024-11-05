import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { IframeModalComponent } from '../iframe-modal/iframe-modal.component';

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    IframeModalComponent,
  ]
})
export class DashboardComponent implements OnInit {
  content: DashboardContent | undefined;

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<DashboardContent>('assets/content.json').subscribe((data) => {
      this.content = data;
    });
  }

  openCourses() {
    console.log('Clicado...')
  }

  openIframeModal() {
    this.dialog.open(IframeModalComponent, {
      width: '80%',
      height: '100%',
    });
  }
}