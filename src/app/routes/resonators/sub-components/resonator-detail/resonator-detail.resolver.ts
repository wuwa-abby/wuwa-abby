import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ErrorOr } from '@core/types/error-or.type';
import { ItemDetail } from '@core/types/item-detail.type';
import { ResonatorsService } from '@routes/resonators/resonators.service';

export const resonatorDetailResolver: ResolveFn<ErrorOr<ItemDetail>> = (
	route,
	_state
) => {
	return inject(ResonatorsService).getResonator(route.params['resonatorName']);
};
