import { Routes } from '@angular/router';

export const FEATURES_ROUTES: Routes = [
  {
    path: 'rxjs',
    loadComponent: () => import('./rxjs/rxjs.component').then(m => m.RxjsComponent),
    children: [
      { path: '', redirectTo: 'subscribe', pathMatch: 'full' },
      { path: 'subscribe', loadComponent: () => import('./rxjs/subscribe/subscribe.component').then(m => m.SubscribeComponent) },
      { path: 'subjects', loadComponent: () => import('./rxjs/subjects/subjects.component').then(m => m.SubjectsComponent) },
      { path: 'operators', loadComponent: () => import('./rxjs/operators/operators.component').then(m => m.OperatorsComponent) }
    ]
  },
  {
    path: 'lazy-loading',
    loadComponent: () => import('./lazy-loading/lazy-loading.component').then(m => m.LazyLoadingComponent),
    children: [
      { path: '', redirectTo: 'routes', pathMatch: 'full' },
      { path: 'routes', loadComponent: () => import('./lazy-loading/routes/routes.component').then(m => m.RoutesComponent) },
      { path: 'defer', loadComponent: () => import('./lazy-loading/defer/defer.component').then(m => m.DeferComponent) }
    ]
  },
  {
    path: 'unit-tests',
    loadComponent: () => import('./unit-tests/unit-tests.component').then(m => m.UnitTestsComponent),
    children: [
      { path: '', redirectTo: 'mocks', pathMatch: 'full' },
      { path: 'mocks', loadComponent: () => import('./unit-tests/mocks/mocks.component').then(m => m.MocksComponent) },
      { path: 'components', loadComponent: () => import('./unit-tests/components/components.component').then(m => m.ComponentsComponent) }
    ]
  },
  {
    path: 'nx-workspaces',
    loadComponent: () => import('./nx-workspaces/nx-workspaces.component').then(m => m.NxWorkspacesComponent)
  },
  {
    path: 'flex-grids',
    loadComponent: () => import('./flex-grids/flex-grids.component').then(m => m.FlexGridsComponent),
    children: [
      { path: '', redirectTo: 'flexbox', pathMatch: 'full' },
      {
        path: 'flexbox',
        loadComponent: () => import('./flex-grids/flexbox/flexbox.component').then(m => m.FlexboxComponent),
        children: [
          { path: '', redirectTo: 'basics', pathMatch: 'full' },
          { path: 'basics', loadComponent: () => import('./flex-grids/flexbox/flexbox-basics/flexbox-basics.component').then(m => m.FlexboxBasicsComponent) },
          { path: 'wrap', loadComponent: () => import('./flex-grids/flexbox/flex-wrap/flex-wrap.component').then(m => m.FlexWrapComponent) },
          { path: 'justify', loadComponent: () => import('./flex-grids/flexbox/justify-content/justify-content.component').then(m => m.JustifyContentComponent) },
          { path: 'align-items', loadComponent: () => import('./flex-grids/flexbox/align-items/align-items.component').then(m => m.AlignItemsComponent) },
          { path: 'align-content', loadComponent: () => import('./flex-grids/flexbox/align-content/align-content.component').then(m => m.AlignContentComponent) },
          { path: 'order', loadComponent: () => import('./flex-grids/flexbox/flex-order/flex-order.component').then(m => m.FlexOrderComponent) },
          { path: 'grow', loadComponent: () => import('./flex-grids/flexbox/flex-grow/flex-grow.component').then(m => m.FlexGrowComponent) },
          { path: 'align-self', loadComponent: () => import('./flex-grids/flexbox/align-self/align-self.component').then(m => m.AlignSelfComponent) }
        ]
      },
      {
        path: 'grid',
        loadComponent: () => import('./flex-grids/grid/grid.component').then(m => m.GridComponent),
        children: [
          { path: '', redirectTo: 'columns', pathMatch: 'full' },
          { path: 'columns', loadComponent: () => import('./flex-grids/grid/grid-template-columns/grid-template-columns.component').then(m => m.GridTemplateColumnsComponent) }
        ]
      }
    ]
  },
  {
    path: 'state-management',
    loadComponent: () => import('./state-management/state-management.component').then(m => m.StateManagementComponent),
    children: [
      { path: '', redirectTo: 'ngrx', pathMatch: 'full' },
      { path: 'ngrx', loadComponent: () => import('./state-management/ngrx/ngrx.component').then(m => m.NgrxComponent) },
      { path: 'signals', loadComponent: () => import('./state-management/signals/signals.component').then(m => m.SignalsComponent) }
    ]
  },
  {
    path: 'angular-advanced',
    loadComponent: () => import('./angular-advanced/angular-advanced.component').then(m => m.AngularAdvancedComponent),
    children: [
      { path: '', redirectTo: 'control-flow', pathMatch: 'full' },
      { path: 'control-flow', loadComponent: () => import('./angular-advanced/control-flow/control-flow.component').then(m => m.ControlFlowComponent) },
      { path: 'signal-io', loadComponent: () => import('./angular-advanced/signal-io/signal-io.component').then(m => m.SignalIoComponent) }
    ]
  }
];
