import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserDataService } from '../../../state/services/user-data.service';
import { Store } from '@ngrx/store';
import { UserFeature } from '../../../state/user/user-feature';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="btn">
      @if(user() ==='') {
      <span class="loading loading-infinity loading-md"></span>> } @else {
      {{ user() }}
      }
    </div>
  `,
  styles: ``,
})
export class UserMenuComponent {
  store = inject(Store);

  user = this.store.selectSignal(UserFeature.selectSub);
}
