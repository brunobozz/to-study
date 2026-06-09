import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './signals.component.html'
})
export class SignalsComponent {
  cart = signal<CartItem[]>([
    { id: 1, name: 'Curso Angular Avançado', price: 150, quantity: 1 },
    { id: 2, name: 'Livro Clean Architecture', price: 90, quantity: 1 }
  ]);

  // Computed: derivados automaticamente do Writable Signal
  totalItems = computed(() => {
    return this.cart().reduce((sum, item) => sum + item.quantity, 0);
  });

  totalPrice = computed(() => {
    return this.cart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  constructor() {
    // Escuta reativa de efeito colateral
    effect(() => {
      console.log(`Carrinho atualizado: ${this.totalItems()} itens. Total R$ ${this.totalPrice()}`);
    });
  }

  updateQuantity(id: number, delta: number) {
    this.cart.update(items =>
      items.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty < 0 ? 0 : newQty };
        }
        return item;
      })
    );
  }

  codeSample = `import { signal, computed, effect } from '@angular/core';

// 1. Sinal Gravável (Writable Signal)
cart = signal<CartItem[]>([ ... ]);

// 2. Sinal Derivado (Computed Signal - Memorizado e Reativo)
totalPrice = computed(() => {
  return this.cart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// 3. Atualizando o sinal
updateQuantity(id: number, delta: number) {
  this.cart.update(items => items.map(item => 
    item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
  ));
}

constructor() {
  // 4. Efeito Reativo (Dispara quando totalPrice mudar)
  effect(() => {
    console.log('Novo Total:', this.totalPrice());
  });
}
`;
}
