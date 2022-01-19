import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import AboutCard from '../../components/about-card/index.js';

const html = htm.bind(h);

export default () => {
	const cards = [
		{
			title: 'This DEMO',
			description: 'Me just wanted to play around to see how it works',
			cta: {
				title: 'GIT REPO',
				href: 'https://github.com/tweenn/buttplug-wasm-demo'
			}
		},
		{
			title: 'Buttplug-rs-ffi',
			description: 'FFI Implementations from the buttplug-rs Rust Sex Toy Control Library to other langauges',
			cta: {
				title: 'GIT REPO',
				href: 'https://github.com/buttplugio/buttplug-rs-ffi'
			}
		},
		{
			title: 'Preact JS',
			description: 'Fast 3kB alternative to React with the same modern API',
			cta: {
				title: 'HOMEPAGE',
				href: 'https://preactjs.com'
			}
		},
		{
			title: 'Material Design Light',
			description: 'Material Design Lite lets you add a Material Design look and feel to your websites.',
			cta: {
				title: 'HOMEPAGE',
				href: 'https://getmdl.io/'
			}
		}
	]

	return html`
		<div class="mdl-grid center-flex">
			${
				cards.map((card) => {
					return html`<${AboutCard} card="${card}" />`;
				})
			}
		</div>
	`;
};


