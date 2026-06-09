import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './grid.component.html'
})
export class GridComponent {
  gridColumns = signal<string>('1fr 1fr 1fr');
  gridGap = signal<string>('0.5rem');

  setGridColumns(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    this.gridColumns.set(val);
  }

  setGridGap(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    this.gridGap.set(val);
  }

  gridCode() {
    return `.parent-container
  display: grid
  grid-template-columns: ${this.gridColumns()}
  gap: ${this.gridGap()}
`;
  }
}
