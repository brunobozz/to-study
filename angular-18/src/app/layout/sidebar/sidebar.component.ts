import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  route: string;
  subitems?: { title: string; route: string }[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { title: 'Painel Geral', icon: 'bi-speedometer2', route: '/' },
    { 
      title: 'RxJS (Reatividade)', 
      icon: 'bi-shuffle', 
      route: '/features/rxjs',
      subitems: [
        { title: 'Observable & Subscribe', route: 'subscribe' },
        { title: 'Subjects vs BehaviorSubjects', route: 'subjects' },
        { title: 'Operadores Comuns', route: 'operators' }
      ]
    },
    { 
      title: 'Lazy Loading & Defer', 
      icon: 'bi-box-arrow-in-right', 
      route: '/features/lazy-loading',
      subitems: [
        { title: 'Lazy Routes', route: 'routes' },
        { title: 'Deferrable Views (@defer)', route: 'defer' }
      ]
    },
    { 
      title: 'Testes Unitários (Jest)', 
      icon: 'bi-check-circle', 
      route: '/features/unit-tests',
      subitems: [
        { title: 'Mocking de Serviços', route: 'mocks' },
        { title: 'Testes de Componentes', route: 'components' }
      ]
    },
    { 
      title: 'Nx Workspaces', 
      icon: 'bi-grid-3x3-gap', 
      route: '/features/nx-workspaces'
    },
    { 
      title: 'Flexbox & CSS Grid', 
      icon: 'bi-layout-three-columns', 
      route: '/features/flex-grids',
      subitems: [
        { title: 'CSS Flexbox (1D)', route: 'flexbox' },
        { title: 'CSS Grid (2D)', route: 'grid' }
      ]
    },
    { 
      title: 'State Management', 
      icon: 'bi-database-gear', 
      route: '/features/state-management',
      subitems: [
        { title: 'NgRx Store', route: 'ngrx' },
        { title: 'Angular Signals State', route: 'signals' }
      ]
    },
    { 
      title: 'Angular 18 Avançado', 
      icon: 'bi-award', 
      route: '/features/angular-advanced',
      subitems: [
        { title: 'Controle de Fluxo (@if/@for)', route: 'control-flow' },
        { title: 'Signal Inputs/Outputs', route: 'signal-io' }
      ]
    }
  ];
}
