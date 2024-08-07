const { ShadowElement, html } = dim

class AppHeader extends ShadowElement {
	render() {
		return html`
			<header class="app-header">
				<nav class="app-header__nav">
					<a class="app-header__link" href="/">Start</a>
					<a class="app-header__link" href="/layout-alt">Layout Alt</a>
					<a class="app-header__link" href="https://github.com/buelbuel/dim">GitHub</a>
					<language-component></language-component>
				</nav>
			</header>

			<style>
				.app-header {
					display: grid;
					height: 6rem;
					border-bottom: 4px solid var(--color-gray-800);
				}

				.app-header__nav {
					display: flex;
					flex-direction: column;
					align-items: center;
					align-self: center;

					@media (min-width: 768px) {
						flex-direction: row;
						justify-content: center;
						gap: 1rem;
					}
				}

				.app-header__link {
					font-weight: var(--font-weight-bold);
					color: var(--color-gray-300);
					text-decoration: inherit;

					&:hover {
						color: var(--color-white);
						background-color: var(--color-gray-800);
					}

					@media (prefers-color-scheme: light) {
						color: var(--color-gray-800);
					}
				}
			</style>
		`
	}

	addEventListeners() {
		this.shadowRoot
			.querySelectorAll('a')
			.forEach(
				(
					/** @type {{ addEventListener: (arg0: string, arg1: Function) => void; }} */ link
				) => {
					link.addEventListener('click', this.debounce(this.handleLinkClick, 300))
				}
			)
	}

	removeEventListeners() {
		this.shadowRoot
			.querySelectorAll('a')
			.forEach(
				(
					/** @type {{ removeEventListener: (arg0: string, arg1: (event: MouseEvent) => void) => void; }} */ link
				) => {
					link.removeEventListener('click', this.handleLinkClick)
				}
			)
	}

	/**
	 * Handle link click events.
	 * @param {MouseEvent} event
	 * @returns {void}
	 */
	handleLinkClick(event) {
		event.preventDefault()
		const anchor = event.target.closest('a')
		if (anchor && anchor.href) {
			const path = new URL(anchor.href).pathname
			window.dispatchEvent(new CustomEvent('navigate', { detail: { path } }))
		}
	}

	/**
	 * Debounce a function.
	 * @param {Function} func
	 * @param {number} wait
	 * @returns {Function}
	 */
	debounce(func, wait) {
		/**
		 * @type {number | undefined}
		 */
		let timeout
		return function (/** @type {any} */ ...args) {
			const later = () => {
				clearTimeout(timeout)
				func(...args)
			}
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
		}
	}
}

export default AppHeader.define('app-header')
