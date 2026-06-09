import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

interface Developer {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './control-flow.component.html'
})
export class ControlFlowComponent {
  devs = signal<Developer[]>([
    { id: 1, name: 'Lucas Silva', role: 'Angular Sênior' },
    { id: 2, name: 'Gabriela Lima', role: 'Frontend Tech Lead' },
    { id: 3, name: 'Bruno Boz', role: 'Senior Front-End' }
  ]);

  clearList() {
    this.devs.set([]);
  }

  resetList() {
    this.devs.set([
      { id: 1, name: 'Lucas Silva', role: 'Angular Sênior' },
      { id: 2, name: 'Gabriela Lima', role: 'Frontend Tech Lead' },
      { id: 3, name: 'Bruno Boz', role: 'Senior Front-End' }
    ]);
  }

  codeSample = `<!-- Exemplo de uso do Built-in Control Flow no HTML -->

<!-- 1. Condicional com @if / @else if / @else -->
@if (devs().length > 3) {
  <p>Temos muitos devs!</p>
} @else if (devs().length > 0) {
  <p>Lista de desenvolvedores disponível:</p>
} @else {
  <p>Nenhum desenvolvedor encontrado.</p>
}

<!-- 2. Loop com @for e fallback @empty (Exige track obrigatório para otimização) -->
<ul>
  @for (dev of devs(); track dev.id) {
    <li>{{ dev.name }} ({{ dev.role }})</li>
  } @empty {
    <li>Nenhum desenvolvedor na lista.</li>
  }
</ul>

<!-- 3. Chaveamento com @switch / @case / @default -->
@switch (status) {
  @case ('loading') { <app-spinner /> }
  @case ('success') { <app-data-view /> }
  @default { <app-error-view /> }
}
`;
}
