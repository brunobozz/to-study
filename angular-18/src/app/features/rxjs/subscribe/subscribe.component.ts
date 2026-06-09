import { Component, OnDestroy, signal, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, Subscription } from 'rxjs';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './subscribe.component.html'
})
export class SubscribeComponent implements OnDestroy {
  counter = signal<number>(0);
  running = signal<boolean>(false);
  private sub?: Subscription;
  private destroyRef = inject(DestroyRef);

  startCounter() {
    this.stopCounter();
    this.running.set(true);
    
    this.sub = interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(val => {
        this.counter.set(val);
      });
  }

  stopCounter() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.running.set(false);
    }
  }

  ngOnDestroy() {
    this.stopCounter();
  }

  codeSample = `import { Component, inject, DestroyRef, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html'
})
export class SubscribeComponent {
  counter = signal(0);
  private destroyRef = inject(DestroyRef); // Angular 18 Destroy Lifecycle Reference

  startCounter() {
    interval(1000)
      .pipe(
        // Cancela a inscrição automaticamente quando o componente for destruído
        takeUntilDestroyed(this.destroyRef) 
      )
      .subscribe(val => this.counter.set(val));
  }
}`;
}
