// src/app/menu/menu.service.ts
import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenuItems(): MenuItem[] {
    return [
      { label: 'Home', path: '/admin' },
      { label: 'Cadastrar', path: '/admin/cadastrar' },
      { label: 'Visualizar', path: '/admin/visualizar' },
    ];
  }
}