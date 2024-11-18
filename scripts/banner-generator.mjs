// Usage: node banner-generator.mjs

import fs from 'fs';

// Function to read and parse JSON files
const readJsonFile = (filePath) => {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	} catch (error) {
		console.error(`Failed to read JSON file ${filePath}:`, error);
		throw error;
	}
};

// Function to generate the banners list
const generateBanners = () => {
	const bannerFiles = fs
		.readdirSync('./public/raw/banners')
		.filter((file) => file.endsWith('.json'));

	const seenBanners = new Set();
	const bannersData = [];

	bannerFiles.forEach((bannerFile) => {
		const bannerData = readJsonFile(`./public/raw/banners/${bannerFile}`);
		const { key, startDate, endDate } = bannerData;

		// Use a unique string representation for deduplication
		const bannerString = JSON.stringify({ key, startDate, endDate });

		if (seenBanners.has(bannerString)) {
			console.error(`Duplicate banner found: ${key}`);
			return;
		}

		seenBanners.add(bannerString);
		bannersData.push({ key, from: startDate, to: endDate });
	});

	return bannersData;
};

// Function to process banners
const processBanners = (banners) => {
	const now = new Date();

	const ignoreBannerInUIRegex = /-standard(?!-permanent)/;
	const sortedBanners = banners
		.filter(banner => banner.key)
		.map((banner) => ({
			...banner,
			showUI: !ignoreBannerInUIRegex.test(banner.key) &&
				new Date(banner.from) < now &&
				new Date(banner.to) > now,
		}))
		.sort((a, b) => new Date(b.to) - new Date(a.to));

	return sortedBanners;
};

// Main function
const main = () => {
	try {
		const banners = generateBanners();
		const processedBanners = processBanners(banners);

		// Delete the existing banners.json file
		try {
			fs.unlinkSync('./public/raw/banners/banners.json');
		} catch (err) {
			console.warn('No existing banners.json file to delete.');
		}

		// Write the new banners JSON file
		fs.writeFileSync(
			'./public/raw/banners/banners.json',
			JSON.stringify(processedBanners, null, 2)
		);

		console.log('Banners generated successfully');
		console.info('Total banners:', processedBanners.length);
		console.info('Please review the generated public/raw/banners/banners.json file');
	} catch (error) {
		console.error('An error occurred while generating banners:', error);
	}
};

main();
