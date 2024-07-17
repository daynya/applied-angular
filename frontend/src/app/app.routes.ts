import { CanActivate, CanActivateFn, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SignalsComponent } from './students/signals/signals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { UserFeature } from './state/user/user-feature';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          import('./students/signals/signals.component').then(
            (c) => c.SignalsComponent
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((r) => r.DASHBOARD_ROUTES),
  },
];

function userDataLoadedGuard(): CanActivateFn {
  return () => false;
}
