import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'features',
        loadChildren: () => import('./features/features.routes').then(m => m.FEATURES_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
