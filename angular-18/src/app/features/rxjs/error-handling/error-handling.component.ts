import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './error-handling.component.html'
})
export class ErrorHandlingComponent {
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  attempts: string[] = [];
  resultMessage = '';
  retryCount = 2; // Número de retentativas configuradas

  codeSample = `import { HttpClient } from '@angular/common/http';
import { catchError, retry, of } from 'rxjs';

this.http.get('/api/dados-instaveis').pipe(
  // Em caso de erro, tenta executar a requisição mais 2 vezes
  retry(2), 
  // Se ainda assim falhar, captura o erro e retorna dados de fallback seguros
  catchError(error => {
    console.error('Falha após retentativas:', error);
    return of({ fallback: true, data: [] });
  })
).subscribe({
  next: (response) => this.data = response,
  error: (err) => console.error('Isso só roda se não houver catchError')
});`;

  startSimulation() {
    this.status = 'loading';
    this.attempts = [];
    this.resultMessage = '';
    
    let currentAttempt = 0;

    // Criamos um Observable customizado que simula falhas temporárias
    const unstableObservable$ = new Observable<string>(subscriber => {
      currentAttempt++;
      const attemptNum = currentAttempt;
      this.attempts.push(`Iniciando tentativa #${attemptNum}...`);
      
      // Simula atraso de rede de 1 segundo
      setTimeout(() => {
        if (attemptNum <= this.retryCount) {
          this.attempts.push(`❌ Tentativa #${attemptNum} falhou devido a oscilação de rede.`);
          subscriber.error(new Error(`Erro temporário de conexão (HTTP 503)`));
        } else {
          this.attempts.push(`✅ Tentativa #${attemptNum} concluída com sucesso!`);
          subscriber.next('Servidor respondeu com sucesso: [Lista de Estudos Carregada]');
          subscriber.complete();
        }
      }, 1000);
    });

    unstableObservable$.pipe(
      // Executa retentativas adicionais
      retry(this.retryCount),
      // Intercepta e trata o erro definitivo caso as tentativas falhem
      catchError(err => {
        this.status = 'error';
        this.resultMessage = `Tratado pelo catchError: Retornando dados alternativos devido à falha definitiva.`;
        return of('Dados alternativos de Fallback');
      })
    ).subscribe({
      next: (val) => {
        if (this.status !== 'error') {
          this.status = 'success';
          this.resultMessage = val;
        }
      }
    });
  }

  setRetryCount(count: number) {
    this.retryCount = count;
    this.resetSimulation();
  }

  resetSimulation() {
    this.status = 'idle';
    this.attempts = [];
    this.resultMessage = '';
  }
}
