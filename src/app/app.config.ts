import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideImgixLoader } from '@angular/common';

import { MessageService } from 'primeng/api';
import { provideHighlightOptions } from 'ngx-highlightjs';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(),
		MessageService,
		provideAnimations(),
		provideHighlightOptions({
			coreLibraryLoader: () => import('highlight.js/lib/core'),
			// lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
			languages: {
				json: () => import('highlight.js/lib/languages/json'),
				bash: () => import('highlight.js/lib/languages/bash'),
				powershell: () => import('highlight.js/lib/languages/powershell'),
			},
		}),
		provideHttpClient(withFetch()),
		provideImgixLoader(environment.baseUrl),
	],
};
