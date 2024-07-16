import { Component, input } from '@angular/core';
import { NavbarLink, NavbarLinks, NavItem } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-item-children',
  standalone: true,
  imports: [RouterLink],
  template: `
    <li>
      <details>
        <summary>Parent</summary>
        <ul class="p-2">
          <li><a>More Tacos</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  `,
  styles: ``,
})
export class LinkItemChildrenComponent {
  link = input.required<NavbarLink>();
}
