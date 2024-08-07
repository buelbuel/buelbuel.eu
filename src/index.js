/**
 * Entry point of the application
 * @param {Function} initRouter - The router utility of the application.
 * @param {Object} routes - The routes of the application.
 * @param {Function} setupI18n - The internationalization utility of the application.
 */
const { initRouter } = dim
import { routes } from './routes.js'
import { setupI18n } from '@config/i18n.js'
window.APP_TITLE = 'dim Template'

/** Importing all components */
import '@components/AppHeader.js'
import '@components/AppFooter.js'
import '@components/AppSidebar.js'
import '@components/ButtonComponent.js'
import '@components/LanguageComponent.js'

/**
 * Initializes the application
 * @param {Function} setupI18n - The internationalization utility of the application.
 * @param {Function} initRouter - The router utility of the application.
 * @returns {Object} The routes of the application.
 */
document.addEventListener('DOMContentLoaded', () => {
	setupI18n()
	initRouter(routes)
})
