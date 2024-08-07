const { BaseElement, html, i18n } = dim

class LanguageComponent extends BaseElement {
	constructor() {
		super()
		this.defineReactiveProperty('currentLanguage', i18n.currentLanguage)
	}

	render() {
		return html`
			<select id="language-select">
				<option value="en" ${this.currentLanguage === 'en' ? 'selected' : ''}>
					English
				</option>
				<option value="de" ${this.currentLanguage === 'de' ? 'selected' : ''}>
					Deutsch
				</option>
			</select>

			<style>
				select {
					padding: 0.5rem 1rem;
					border-color: var(--color-gray-800);
					border-width: 2px;
					border-style: solid;
					background-color: var(--color-gray-800);
					color: var(--color-white);
					font-size: var(--font-size-base);
					cursor: pointer;

					&:hover {
						background-color: var(--color-white);
						color: var(--color-gray-800);
					}
				}
			</style>
		`
	}

	addEventListeners() {
		this.addEventListenerWithCleanup(
			'#language-select',
			'change',
			(/** @type {{ target: { value: any; }; }} */ e) => {
				const newLang = e.target.value
				i18n.setLanguage(newLang)
				this.currentLanguage = newLang
			}
		)
	}
}

export default LanguageComponent.define('language-component')
