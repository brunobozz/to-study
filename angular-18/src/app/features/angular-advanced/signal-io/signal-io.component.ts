import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTaskComponent } from './child-task.component';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-signal-io',
  standalone: true,
  imports: [CommonModule, ChildTaskComponent, CodeHighlighterComponent],
  templateUrl: './signal-io.component.html'
})
export class SignalIoComponent {
  taskTitle = signal<string>('Refatorar Monorepo no Nx');
  parentStatus = signal<string>('Pendente');
  alertMsg = signal<string>('');

  toggleParentStatus() {
    this.parentStatus.update(curr => curr === 'Pendente' ? 'Concluído' : 'Pendente');
  }

  handleChildAlert(msg: string) {
    this.alertMsg.set(msg);
    setTimeout(() => this.alertMsg.set(''), 3000);
  }

  codeSample = `import { Component, input, output, model } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`
    <h3>{{ title() }}</h3>
    <button (click)="status.set('Concluído')">Finalizar</button>
    <button (click)="notify.emit('Dados enviados')">Enviar</button>
  \`
})
export class ChildComponent {
  // 1. Sinal de entrada somente-leitura e obrigatório
  title = input.required<string>();

  // 2. Modelo bidirecional (two-way binding)
  status = model<string>('Pendente');

  // 3. Sinal de saída leve (Output)
  notify = output<string>();
}
`;
}
