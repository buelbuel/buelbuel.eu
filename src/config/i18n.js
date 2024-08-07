/**
 * Internationalization setup
 * @param {Object} i18n - The internationalization utility of the application.
 * @param {Object} enTranslations - The translations for English.
 * @param {Object} deTranslations - The translations for German.
 */
const { i18n } = dim
import enTranslations from '@locales/en.js'
import deTranslations from '@locales/de.js'

/** @exports {Function} setupI18n - The internationalization setup of the application. */
export function setupI18n() {
	i18n.addTranslations('en', enTranslations)
	i18n.addTranslations('de', deTranslations)
}
