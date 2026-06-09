import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lazy-loading.component.html'
})
export class LazyLoadingComponent {}
