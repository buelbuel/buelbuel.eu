const { BaseElement, html, styleMap, t } = dim

class LayoutAltPage extends BaseElement {
	constructor() {
		super()
	}

	connectedCallback() {
		super.connectedCallback()
		this.setSidebarContent()
	}

	setSidebarContent() {
		const styles = {
			'text-align': 'center',
			color: 'var(--color-gray-100)'
		}

		const sidebarContent = html` <p style="${styleMap(styles)}"></p> `

		window.dispatchEvent(
			new CustomEvent('set-sidebar-content', {
				detail: { content: sidebarContent },
			})
		)
	}

	render() {
		return html`
			<section class="layout-b-page container">
				<h1>${t('layoutAlt.title')}</h1>
				<p>${t('layoutAlt.description')}</p>
			</section>
		`
	}
}

export default LayoutAltPage.define('layout-alt-page')
