import { ResourceHistoryDTO } from '../types/kuro-history.type';

export interface GachaMemoryTable extends ResourceHistoryDTO {
	id?: number;
	profileId?: number;
	isCustom?: boolean;
}
