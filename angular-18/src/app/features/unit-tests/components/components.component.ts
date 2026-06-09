import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './components.component.html'
})
export class ComponentsComponent {
  codeSample = `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Componentes Standalone devem ser declarados em imports, não em declarations!
      imports: [CounterComponent] 
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Renderização inicial
  });

  it('deve incrementar o valor na tela ao clicar no botão', () => {
    // 1. Localiza o botão de incremento no HTML
    const button = fixture.debugElement.query(By.css('.btn-increment'));
    
    // 2. Dispara o evento de clique
    button.triggerEventHandler('click', null);
    
    // 3. Força a detecção de alterações para atualizar o HTML
    fixture.detectChanges();

    // 4. Valida se o texto foi atualizado no DOM
    const textEl = fixture.debugElement.query(By.css('.counter-value')).nativeElement;
    expect(textEl.textContent).toContain('1');
    expect(component.value()).toBe(1); // Se usar Signals
  });
});
`;
}
