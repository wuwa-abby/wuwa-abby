import { GachaMemoryTable } from '@core/model/gacha-history.table';
import { ConveneBanner } from '@core/types/convene-banner.type';

export const KURO_HISTORY_URL_REGEX: RegExp =
	/https:\/\/aki-gm-resources-oversea\.aki-game\.net\/aki\/gacha\/index\.html#\/record\?.*/;

/**
 * Calculate the pity and 50-50 details for a resource.
 *
 * WARNING: This function might return incorrect results if the pool is not sorted by Kuro API.
 *
 * @param resource Resource to calculate details for.
 * @param poolResources List of all resources in the pool.
 */
export function calculateResourceDetails(
	resource: GachaMemoryTable,
	poolResources: GachaMemoryTable[],
	currentPool: ConveneBanner,
	previousPool?: ConveneBanner
) {
	if (resource.qualityLevel < 4) return;

	if (poolResources.length === 1) return { pity: 1, wonFiftyFifty: true };

	const index = poolResources.indexOf(resource);
	const wishesBeforeResource = (poolResources = poolResources.slice(index + 1));

	// WuWa resets 4* pity on 5* blessing
	const pity =
		wishesBeforeResource.findIndex(
			(x) => x.qualityLevel >= resource.qualityLevel
		) + 1;

	const isFeatured =
		resource.qualityLevel === 4
			? currentPool.featuredResources.fourStar.includes(resource.name)
			: currentPool.featuredResources.fiveStar.includes(resource.name);

	let wonFiftyFifty = false;
	if (isFeatured) {
		const previousResource = wishesBeforeResource
			.slice(0, pity)
			.find((x) => x.qualityLevel === resource.qualityLevel);

		if (previousResource) {
			const previousFeaturedInCurrent =
				resource.qualityLevel === 4
					? currentPool.featuredResources.fourStar.includes(
							previousResource.name
					  )
					: currentPool.featuredResources.fiveStar.includes(
							previousResource.name
					  );

			const previousFeaturedInLast =
				(previousPool &&
					(resource.qualityLevel === 4
						? previousPool.featuredResources.fourStar.includes(
								previousResource.name
						  )
						: previousPool.featuredResources.fiveStar.includes(
								previousResource.name
						  ))) ??
				false;

			// If the previous resource was featured in the current pool or the previous pool, the 50-50 was won for the current resource
			wonFiftyFifty = previousFeaturedInCurrent || previousFeaturedInLast;
		}
	}

	return {
		pity: pity || poolResources.length + 1,
		wonFiftyFifty: wonFiftyFifty,
	};
}
