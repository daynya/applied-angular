import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { UserFeature } from './state/user/user-feature';
import { provideEffects } from '@ngrx/effects';
import { loadUser } from './state/user/get-user.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(UserFeature),
    provideStoreDevtools(),
    provideEffects({ loadUser: loadUser }),
  ],
};
