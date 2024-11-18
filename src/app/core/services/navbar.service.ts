import { Injectable } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Injectable({
	providedIn: 'root',
})
export class NavbarService {
	constructor() {}

	public activeRoute?: string;

	public get navbarItems(): MenuItem[] {
		return [
			{
				label: 'Convenes',
				icon: 'bi bi-house',
				routerLink: 'convenes',
				styleClass:
					this.activeRoute === '/convenes'
						? 'fw-semibold text-decoration-underline'
						: '',
			},
			{
				label: 'Resonators',
				icon: 'pi pi-users',
				routerLink: 'resonators',
				styleClass: this.activeRoute?.startsWith('/resonators')
					? 'fw-semibold text-decoration-underline'
					: '',
			},
			{
				label: 'Statistics',
				icon: 'pi pi-chart-bar',
				routerLink: 'stats',
				styleClass: this.activeRoute?.startsWith('/stats/')
					? 'fw-semibold text-decoration-underline'
					: '',
			},
		];
	}
}
