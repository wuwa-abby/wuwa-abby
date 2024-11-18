import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'abby-contribute',
	standalone: true,
	imports: [RouterModule, CardModule, ButtonModule],
	templateUrl: './contribute.component.html',
	styleUrl: './contribute.component.scss',
})
export class ContributeComponent {
	constructor() {}
}
