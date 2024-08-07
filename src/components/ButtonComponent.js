const { ShadowElement, html } = dim

class ButtonComponent extends ShadowElement {
	static get observedAttributes() {
		return ['type']
	}

	constructor() {
		super()
	}

	render() {
		return html`
			<button class="button-component" type="${this.type}">
				<slot></slot>
			</button>

			<style>
				.button-component {
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
}

export default ButtonComponent.define('button-component')
