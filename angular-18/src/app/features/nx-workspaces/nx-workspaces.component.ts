import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-nx-workspaces',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './nx-workspaces.component.html'
})
export class NxWorkspacesComponent {
  codeSample = `# 1. Abre o painel visual interativo do grafo de dependências
npx nx graph

# 2. Executa testes unitários apenas para os projetos afetados por commits locais
npx nx affected:test

# 3. Executa build para múltiplos projetos no monorepo simultaneamente
npx nx run-many -t build

# 4. Gera uma nova lib reutilizável Angular contendo a arquitetura standalone
npx nx g @nx/angular:lib auth-core
`;
}
