import {
	CommonModule,
	isPlatformBrowser,
	NgOptimizedImage,
} from '@angular/common';
import {
	AfterViewInit,
	Component,
	Inject,
	OnInit,
	PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';

import { ErrorOr } from '@core/types/error-or.type';
import { ItemDetail } from '@core/types/item-detail.type';
import { StorageService } from '@core/services/storage.service';

@Component({
	selector: 'abby-resonator-detail',
	standalone: true,
	imports: [
		CommonModule,
		NgOptimizedImage,
		RouterModule,

		ButtonModule,
		BreadcrumbModule,
		TooltipModule,
	],
	templateUrl: './resonator-detail.component.html',
	styleUrl: './resonator-detail.component.scss',
})
export class ResonatorDetailComponent implements OnInit, AfterViewInit {
	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private activatedRoute: ActivatedRoute,
		private storageService: StorageService
	) {}

	public breadcrumbs!: MenuItem[];

	private _resonator?: ErrorOr<DisplayResonatorDetail>;

	public get resonator(): DisplayResonatorDetail | undefined {
		return this._resonator?.value;
	}

	public get resonatorError(): string | undefined {
		return this._resonator?.message;
	}

	public get resonatorStatus(): number | undefined {
		return this._resonator?.status;
	}

	ngOnInit(): void {
		this._resonator = this.activatedRoute.snapshot.data['resonator'];
		this.createBreadcrumbs();
	}

	ngAfterViewInit(): void {
		this.getResonatorHistory();
	}

	private createBreadcrumbs(): void {
		this.breadcrumbs = [
			{
				label: 'Resonators',
				routerLink: '/resonators',
			},
			{
				label: this.resonator?.name,
				icon: this.resonator?.name ? undefined : 'pi pi-question',
			},
		];
	}

	private async getResonatorHistory(): Promise<void> {
		if (!isPlatformBrowser(this.platformId) || !this.resonator) return;

		const gachaMemory = this.storageService.gachaMemoryStore;

		let resonatorHistory = await gachaMemory
			.where('resourceId')
			.equals(this.resonator?.id)
			.toArray();

		resonatorHistory = resonatorHistory.sort(
			(a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
		);

		console.log(resonatorHistory);
		this.resonator.obtained = !!resonatorHistory.length;
		if (this.resonator.obtained)
			this.resonator.lastObtainedOn = new Date(
				resonatorHistory[resonatorHistory.length - 1]?.time
			);
	}
}

interface DisplayResonatorDetail extends ItemDetail {
	obtained?: boolean;
	lastObtainedOn?: Date;
}
