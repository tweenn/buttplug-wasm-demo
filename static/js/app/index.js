import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import Navigation from './components/navigation/index.js';
import TermsOfService from './components/terms-of-service/index.js';

import ViewAbout from './views/about/index.js';
import ViewBluetooth from './views/bluetooth/index.js';

import router from './services/router/index.js';
import { Router } from './services/router/index.js';

// Initialize htm with Preact
const html = htm.bind(h);

export default () => {
	// const [showTOS, setShowTOS] = useState(true);
	const [showTOS, setShowTOS] = useState(false);

	router.init();

	return html`
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<${Navigation} />
			<main class="mdl-layout__content">
				<div class="page-content">
					<${Router}>
						<${ViewBluetooth} path="default" />
						<${ViewAbout} path="/about" />
					</Router>
				</div>
			</main>
		</div>
		<${TermsOfService}
			show="${showTOS}"
			setShow="${setShowTOS}"
			id="tos-dialog"
		/>
	`;
};
