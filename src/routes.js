/**
 * Defines the routes of the application.
 * @param {Object} routes - The routes of the application.
 * @returns {Object} The routes of the application.
 */
export const routes = {
	'/': {
		component: () => import('@pages/index.js'),
		layout: 'main-layout',
		titleKey: 'start.title',
		descriptionKey: 'start.description',
	},
	'/layout-alt': {
		component: () => import('@pages/layout-alt/index.js'),
		layout: 'alternate-layout',
		titleKey: 'layoutAlt.title',
		descriptionKey: 'layoutAlt.description',
	},
}
