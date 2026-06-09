import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unit-tests',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './unit-tests.component.html'
})
export class UnitTestsComponent {}
