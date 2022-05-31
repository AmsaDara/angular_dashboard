import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  template: `
    <app-page-header icon="cast_for_education">
      <h2>All courses</h2>

      <button routerLink="/home" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span>Back deshboard</span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
      Welcome to e-learning plateforme
    </div>
  `
})
export class SalesComponent {}