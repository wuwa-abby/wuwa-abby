export interface ItemDetail {
	id: number;
	name: string;
	nickname: string;
	birthday: string;
	sex: string;
	country: string;
	influence: string;
	bio: string;
	gender: string;
	attribute: string;
	imageName?: string;
	rarity: number;
	weaponOfChoice: string;
	talent: {
		name: string;
		description: string;
	};
	voice_actors: {
		CN: string;
		JP: string;
		EN: string;
		KO: string;
	};
	combo_teaching: {
		title: string;
		description: string;
	}[];
}

export interface SequenceInfo {
	sequence: number;
	name: string;
	description: string;
}

export interface SkillInfo {
	name: string;
	description: string;
}

export interface UpgradeMaterials {
	breakthrough: {
		[key: string]: UpgradeMaterial[];
	};
	talents: UpgradeMaterial[];
}

export interface UpgradeMaterial {
	imageName: string;
	name: string;
	quantity: number;
}
