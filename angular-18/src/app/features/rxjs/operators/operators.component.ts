import { Component, OnInit, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError, of, delay } from 'rxjs';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CodeHighlighterComponent],
  templateUrl: './operators.component.html'
})
export class OperatorsComponent implements OnInit {
  searchControl = new FormControl('');
  logs = signal<string[]>([]);
  loading = signal<boolean>(false);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(val => {
          if (val && val.length >= 3) {
            this.addLog(`[Debounce] Digitou "${val}". Aguardando requisição...`);
            this.loading.set(true);
          }
        }),
        switchMap(val => {
          if (!val || val.length < 3) {
            this.loading.set(false);
            return of([]);
          }
          this.addLog(`[API] Iniciou requisição HTTP para "${val}"...`);
          return this.mockApiCall(val).pipe(
            catchError(() => {
              this.addLog(`[Erro] Ocorreu um erro na busca de "${val}".`);
              return of([]);
            })
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(results => {
        this.loading.set(false);
        this.addLog(`[SwitchMap] Concluiu. Itens: [${results.join(', ')}]`);
      });
  }

  private mockApiCall(query: string) {
    const database = ['angular', 'rxjs', 'townsq', 'react', 'typescript', 'ngrx', 'signals'];
    const filtered = database.filter(item => item.includes(query.toLowerCase()));
    return of(filtered).pipe(
      delay(1000)
    );
  }

  addLog(msg: string) {
    this.logs.update(current => [msg, ...current]);
  }

  codeSample = `import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError, of } from 'rxjs';

@Component({ ... })
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),          // Evita chamadas a cada caractere
      distinctUntilChanged(),     // Pesquisa somente se o valor mudou
      switchMap(query => {
        // CANCELA requisições ativas se o usuário digitar algo novo!
        return this.api.search(query).pipe(
          catchError(() => of([])) // Captura erro sem quebrar o stream principal
        );
      })
    ).subscribe(results => this.showResults(results));
  }
}
`;
}
