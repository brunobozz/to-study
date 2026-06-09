import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-highlighter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-highlighter.component.html'
})
export class CodeHighlighterComponent {
  @Input({ required: true }) code: string = '';
  @Input() language: string = 'typescript';
  
  copied = signal(false);

  copyCode() {
    navigator.clipboard.writeText(this.code);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
