import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-flexbox',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./flexbox.component.scss'],
  templateUrl: './flexbox.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FlexboxComponent {}
