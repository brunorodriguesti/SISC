import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, RouterModule, CommonModule],
  template: `
    <ng-container *ngFor="let item of menuItems; trackBy: trackByPath">
      <a mat-list-item [routerLink]="item.path">{{ item.label }}</a>
    </ng-container>
  `,
  styles: ['']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  menuInscricao: MenuItem[] = [
    { path: '/', label: 'Home' },
    { path: '/inscricao', label: 'Inscricao' },
    { path: '/sobre', label: 'Sobre' }
  ];

  menuAdmin: MenuItem[] = [
    { path: '/admin', label: 'Home' },
    { path: '/admin/administrar', label: 'Administrar' },
    { path: '/admin/candidatos', label: 'Candidatos' },
    { path: '/admin/sobre', label: 'Sobre' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMenuItems();
    });

    this.updateMenuItems();
  }

  updateMenuItems() {
    const currentUrl = this.router.url;
    if (currentUrl.startsWith('/admin')) {
      this.menuItems = [...this.menuAdmin];
    } else {
      this.menuItems = [...this.menuInscricao];
    }
  }

  trackByPath(index: number, item: MenuItem): string {
    return item.path;
  }
}
