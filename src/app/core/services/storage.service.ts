import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import Dexie, { Table } from 'dexie';

import { GachaMemoryTable } from '../model/gacha-history.table';
import { GeneralMemoryTable } from '../model/general-data.table';
import { UserProfileTable } from '../model/user-profile.table';

@Injectable({
	providedIn: 'root',
})
export class StorageService extends Dexie {
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		super('wubby-memory');
		this.version(1).stores({
			gacha:
				'++id,resourceId,cardPoolType,cardPoolId,qualityLevel,resourceType,name,count,time,pity,profileId,isCustom',
			memory: 'key,value',
			profiles:
				'++id,profileName,profileImage,inGameID,server,lastUpdateDate,isActive',
		});

		if (isPlatformBrowser(this.platformId)) {
			this.open()
				.then(() => {
					console.debug('Database opened successfully');
				})
				.catch(() => {
					console.error('Error opening database');
				});

			this.generalMemoryTable = this.getGeneralMemoryTable();
			this.gachaMemoryStore = this.getGachaMemoryTable();
			this.userProfileTable = this.getUserProfileTable();
		}
	}

	public generalMemoryTable!: Table<GeneralMemoryTable, string>;
	public gachaMemoryStore!: Table<GachaMemoryTable, number>;
	public userProfileTable!: Table<UserProfileTable, number>;

	public get db(): Dexie {
		return this;
	}

	public getGeneralMemoryTable(): Table<GeneralMemoryTable, string> {
		return this.table('memory');
	}

	public getGachaMemoryTable(): Table<GachaMemoryTable, number> {
		return this.table('gacha');
	}

	public getUserProfileTable(): Table<UserProfileTable, number> {
		return this.table('profiles');
	}
}
