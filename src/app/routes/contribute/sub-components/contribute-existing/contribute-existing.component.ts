import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { DisplayResonator } from '@routes/resonators/resonators.component';
import { ResonatorsService } from '@routes/resonators/resonators.service';
import { SimpleResonator } from '@core/types/resonator.type';

@Component({
	selector: 'abby-contribute-existing',
	standalone: true,
	imports: [
		RouterModule,
		FormsModule,
		CommonModule,
		NgOptimizedImage,

		BreadcrumbModule,
		CardModule,
		ButtonModule,
	],
	templateUrl: './contribute-existing.component.html',
	styleUrl: './contribute-existing.component.scss',
})
export class ContributeExistingComponent {
	constructor(private resonatorService: ResonatorsService) {
		this.createBreadcrumbs();
	}

	public breadcrumbs: MenuItem[] = [];
	public updateType?: 'resonator' | 'weapon';

	public resonators: SimpleResonator[] = [];
	public weapons: DisplayResonator[] = [];

	public get resonatorUpdateClass() {
		if (!this.updateType || this.updateType !== 'resonator') return;

		return 'border border-100';
	}

	public get weaponUpdateClass() {
		if (!this.updateType || this.updateType !== 'weapon') return;

		return 'border border-100';
	}

	public changeUpdateType(type: 'resonator' | 'weapon') {
		this.updateType = type;

		if (type === 'resonator') {
			this.resonatorService.getResonators().subscribe({
				next: (resonators) => {
					this.resonators = resonators;
				},
				error: (error) => {
					console.error('Error getting resonators', error);
				},
			});
		} else {
			// this.resonatorService.getWeapons().then((weapons) => {
			// 	this.weapons = weapons;
			// });
		}
	}

	private createBreadcrumbs() {
		this.breadcrumbs = [
			{ label: 'Contribute', routerLink: '/contribute' },
			{ label: 'Make changes', routerLink: '/contribute/existing' },
		];
	}
}
