import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, Observable, of } from 'rxjs';

import { ErrorOr } from '@core/types/error-or.type';
import { ItemDetail } from '@core/types/item-detail.type';

import { SimpleResonator } from '@core/types/resonator.type';

@Injectable({
	providedIn: 'root',
})
export class ResonatorsService {
	constructor(private http: HttpClient) {}

	public getResonators(): Observable<SimpleResonator[]> {
		return this.http.get<SimpleResonator[]>('raw/resonators/list.json');
	}

	public getResonator(resonatorName: string): Observable<ErrorOr<ItemDetail>> {
		return this.http
			.get<ItemDetail>(`raw/resonators/${resonatorName.toLowerCase()}.json`)
			.pipe(
				map((resonator) => {
					return ErrorOr.value<ItemDetail>(resonator);
				}),
				catchError((error) => {
					let errorDetails;
					if (error.status === 404) {
						errorDetails =
							'Wubby does not know this resonator! Please raise an issue on GitHub.';
					} else {
						errorDetails = error.message;
					}

					return of(ErrorOr.error<ItemDetail>(errorDetails, error.status));
				})
			);
	}
}
