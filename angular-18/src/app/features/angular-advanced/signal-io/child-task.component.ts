import { Component, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-task.component.html'
})
export class ChildTaskComponent {
  // 1. Signal-based input
  title = input.required<string>();

  // 2. Bidirectional model binding
  status = model<string>('Pendente');

  // 3. Signal-based output
  taskAlert = output<string>();

  toggleStatus() {
    this.status.update(current => current === 'Pendente' ? 'Concluído' : 'Pendente');
  }

  triggerAlert() {
    this.taskAlert.emit('Evento disparado do componente filho!');
  }
}
