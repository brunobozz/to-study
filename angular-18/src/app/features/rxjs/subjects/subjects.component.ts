import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnDestroy {
  private subject = new Subject<number>();
  private behaviorSubject = new BehaviorSubject<number>(100);

  subjectValues: number[] = [];
  behaviorValues: number[] = [];
  private currentVal = 100;
  private subs = new Subscription();

  constructor() {
    this.startSubs();
  }

  startSubs() {
    this.subs.add(
      this.subject.subscribe(val => this.subjectValues.push(val))
    );
    this.subs.add(
      this.behaviorSubject.subscribe(val => this.behaviorValues.push(val))
    );
  }

  emitValue() {
    this.currentVal += 5;
    this.subject.next(this.currentVal);
    this.behaviorSubject.next(this.currentVal);
  }

  resetSimulation() {
    this.subs.unsubscribe();
    this.subs = new Subscription();
    this.subjectValues = [];
    this.behaviorValues = [];
    this.currentVal = 100;
    this.subject = new Subject<number>();
    this.behaviorSubject = new BehaviorSubject<number>(100);
    this.startSubs();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  codeSample = `import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  // 1. Armazenamento privado de estado
  private data$ = new BehaviorSubject<string>('Estado Inicial');

  // 2. Exposição pública segura como Observable somente-leitura
  public data: Observable<string> = this.data$.asObservable();

  // 3. Método encapsulado para alteração de valor
  updateData(newData: string): void {
    this.data$.next(newData);
  }
}
`;
}
