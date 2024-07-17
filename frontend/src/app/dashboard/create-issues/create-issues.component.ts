import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>All the Issues Stuff</h1>

    <a routerLink="begin">Start a New Issue</a>
    <router-outlet />
  `,
  styles: ``,
})
export class CreateIssuesComponent {}
