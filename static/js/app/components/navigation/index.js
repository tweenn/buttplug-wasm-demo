import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import router from '../../services/router/index.js';
import { RouterLink } from '../../services/router/index.js';

const html = htm.bind(h);

const click = (event) => {
	const path = event.target.getAttribute('path') || '';

	router.push(path);
}

export default () => {

	return html`
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<!-- Title -->
				<a class="mdl-layout-title mdl-navigation__link p-0" path="/" onClick="${click}">
					Buttplug-rs-fii WASM Demo
				</a>

				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>

				<!-- Navigation. We hide it in small screens. -->
				<div class="mdl-navigation">

					<${RouterLink} css="mdl-navigation__link" path="/" text="Toy control" />
					<${RouterLink} css="mdl-navigation__link" path="/about" text="About" />

					<a class="mdl-navigation__link" href="https://github.com/tweenn/buttplug-wasm-demo" target="_blank" referrer="no-referrer">
						<span class="inner">
							Github
						</span>
					</a>
				</div>
			</div>
		</header>
	`;
};


