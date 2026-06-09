import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-mocks',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './mocks.component.html'
})
export class MocksComponent {
  codeSample = `import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // 1. Cria mock do HttpClient interceptando chamadas 'get'
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    // 2. Substitui o token real pelo Mock criado no TestBed
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });

    service = TestBed.inject(UsersService);
  });

  it('deve retornar lista de usuários com sucesso', (done) => {
    const mockResponse = [{ id: 1, name: 'TownSq Developer' }];
    httpSpy.get.and.returnValue(of(mockResponse)); // Define retorno mockado

    service.getAll().subscribe(data => {
      expect(data).toEqual(mockResponse);
      expect(httpSpy.get).toHaveBeenCalledTimes(1); // Valida chamada
      done(); // Sinaliza conclusão do teste assíncrono
    });
  });
});
`;
}
