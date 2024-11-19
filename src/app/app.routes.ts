import { Routes } from '@angular/router';
import { ListComponent } from './pets/list/list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full',
  },
  {
    path: 'pets',
    component: ListComponent,
  },
];
