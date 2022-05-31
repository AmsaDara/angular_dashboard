import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  template: `
    <app-page-header icon="home">
      <h2>Home</h2>

      <button
        routerLink="/sales"
        mat-flat-button
        color="primary"
        class="action"
      >
        <mat-icon class="mr-2">cast_for_education</mat-icon>
        <span>Go courses</span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
      Hello {{user}}
    </div>
  `
})
export class HomeComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  
    user: string = 'Mouhamadou MANSOUR';
}