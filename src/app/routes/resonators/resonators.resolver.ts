import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { SimpleResonator } from '@core/types/resonator.type';

import { ResonatorsService } from './resonators.service';

export const resonatorsResolver: ResolveFn<SimpleResonator[]> = (
	_route,
	_state
) => {
	return inject(ResonatorsService).getResonators();
};
