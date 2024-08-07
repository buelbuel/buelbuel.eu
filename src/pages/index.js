const { BaseElement, html, t } = dim

class StartPage extends BaseElement {
	constructor() {
		super()
		this.defineReactiveProperty('count', 0)
	}

	render() {
		return html`
			<section class="start-page container">
				<h1>${t('start.editMe')}</h1>
				<p>${t('start.description')}</p>
				<login-form></login-form>
				<register-form></register-form>
				<div>
					<button-component id="increment">Increment ${this.count}</button-component>
				</div>
			</section>
		`
	}

	addEventListeners() {
		this.addEventListenerWithCleanup('#increment', 'click', () => {
			this.count++
		})
	}
}

export default StartPage.define('start-page')
