const path = require('node:path');

const benefitsDir = process.env.NODE_ENV === 'production'
	? process.env.RESOURCES_REMOTE
	: process.env.RESOURCES_LOCAL;

module.exports = benefitId => {
	switch (benefitId) {
	case 2:
		return path.join(benefitsDir, 'tier-2_favorite-kitten.zip');
	case 3: case 4: case 5:
		return path.join(benefitsDir, 'tier-3_trusted-cat.zip');
	default:
		return null;
	}
};