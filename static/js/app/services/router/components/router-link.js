import { h } from 'https://unpkg.com/preact@latest?module';
// import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import router from '../index.js';

const html = htm.bind(h);

export default ({
	css = '',
	path = '/',
	text = ''
}) => {
	const click = () => {
		router.push(path);
	};

	const isSelected = () => {
		if (path === router.currentView) {
			return 'true';
		}
		return 'false';
	};

	return html`
		<a class="${css}" onClick="${click}" aria-selected="${isSelected()}" selected="${isSelected()}">
			<span class="inner" onClick="${click}">
				${text}
			</span>
		</a>
	`;
};


