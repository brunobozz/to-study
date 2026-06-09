import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyDetailsComponent } from './heavy-details.component';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [CommonModule, HeavyDetailsComponent, CodeHighlighterComponent],
  templateUrl: './defer.component.html'
})
export class DeferComponent {
  codeSample = `<!-- Exemplo prático de Deferrable Views no HTML -->
@defer (on interaction) {
  <!-- O chunk JS deste componente só é baixado e compilado ao clicar no placeholder -->
  <app-heavy-details></app-heavy-details>
} @placeholder {
  <div class="alert alert-secondary text-center">
    Clique neste bloco para carregar.
  </div>
} @loading {
  <div class="spinner-border text-primary"></div>
} @error {
  <p class="text-danger">Erro de rede ao baixar o componente.</p>
}
`;
}
