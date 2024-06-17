import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/question-input/question-input.component').then(c => c.QuestionInputComponent)
  }
];
