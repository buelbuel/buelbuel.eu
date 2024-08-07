const { ShadowElement, html, t } = dim

class AppFooter extends ShadowElement {
	render() {
		return html`
			<footer class="app-footer">
				<p class="app-footer__p container">${t('footer.text')}</p>
			</footer>

			<style>
				.app-footer {
					margin-top: 1rem;
					padding: 6rem 0;
					background-color: var(--color-gray-800);
				}

				.app-footer__p {
					color: var(--color-gray-100);
					text-align: center;
				}
			</style>
		`
	}
}

export default AppFooter.define('app-footer')
