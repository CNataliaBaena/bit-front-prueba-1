import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { Home } from './app/components/pages/home/home';

bootstrapApplication(Home, {
  providers: [
    provideHttpClient()
  ]
});

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
