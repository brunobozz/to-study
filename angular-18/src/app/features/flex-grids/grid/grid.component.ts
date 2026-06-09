import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent {}
