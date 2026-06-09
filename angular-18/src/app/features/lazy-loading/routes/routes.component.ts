import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './routes.component.html'
})
export class RoutesComponent {
  codeSample = `import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Carregamento de um Componente Standalone diretamente de forma preguiçosa
  {
    path: 'configuracoes',
    loadComponent: () => import('./settings/settings.component')
      .then(m => m.SettingsComponent)
  },
  
  // 2. Carregamento de um arquivo completo de sub-rotas (Lazy Routing Module)
  {
    path: 'vendas',
    loadChildren: () => import('./sales/sales.routes')
      .then(m => m.SALES_ROUTES)
  }
];
`;
}
