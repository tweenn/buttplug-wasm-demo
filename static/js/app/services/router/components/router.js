import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import router from '../index.js';

const html = htm.bind(h);

export default ({
	children
}) => {
	return html`
		${router.render(children).type()}
	`;
};


