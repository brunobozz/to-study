import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterComponent } from '../../../shared/code-highlighter/code-highlighter.component';

@Component({
  selector: 'app-ngrx',
  standalone: true,
  imports: [CommonModule, CodeHighlighterComponent],
  templateUrl: './ngrx.component.html'
})
export class NgrxComponent {
  codeSample = `import { Injectable } from '@angular/core';
import { createAction, props, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

// 1. ACTIONS
export const loadItems = createAction('[Dashboard] Load Items');
export const loadItemsSuccess = createAction('[API] Success', props<{ items: any[] }>());

// 2. REDUCER
export interface State { items: any[]; loading: boolean; }
const reducer = createReducer(
  { items: [], loading: false },
  on(loadItems, state => ({ ...state, loading: true })),
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items, loading: false }))
);

// 3. SELECTOR
const selectFeature = createFeatureSelector<State>('dashboard');
export const selectItems = createSelector(selectFeature, state => state.items);

// 4. EFFECT
@Injectable()
export class DashboardEffects {
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadItems),
    switchMap(() => this.api.getItems().pipe(
      map(items => loadItemsSuccess({ items })),
      catchError(() => of({ type: '[API] Error' }))
    ))
  ));
  constructor(private actions$: Actions, private api: ApiService) {}
}
`;
}
