import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-state-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './state-management.component.html'
})
export class StateManagementComponent {}
