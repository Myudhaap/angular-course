import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from "@angular/common/http";
import {RequestInterceptor} from "./shared/interceptors/request.interceptor";
import {authInterceptor} from "./shared/interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      // withInterceptorsFromDi()
      withInterceptors([authInterceptor])
    ),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestInterceptor,
    //   multi: true
    // }
  ]
};
