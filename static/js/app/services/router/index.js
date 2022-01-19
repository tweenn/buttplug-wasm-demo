import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';

import routerComponent from './components/router.js';
import routerLinkComponent from './components/router-link.js';

export default {
	// init: function (currentView, setCurrentView) {
	init: function () {
		if ((!this.currentView) || (this.setCurrentView)) {

			const [currentView, setCurrentView] = useState(window.location.pathname);

			this.currentView = currentView;
			this.setCurrentView = setCurrentView;
		}
	},
	render: function (children) {
		let selectedChild;
		let defaultChild;

		children.forEach((child) => {
			if (this.comparePath(child)) {
				selectedChild = child;
			}
			if (this.isDefault(child)) {
				defaultChild = child;
			}
		});

		return selectedChild || defaultChild;
	},
	comparePath: function (child) {
		const path = this.currentView;

		if (child?.props?.path) {
			if ((path.includes(child?.props?.path)) && (child?.props?.path !== 'default')) {
				return true;
			}
			return false;
		}
		return false;
	},
	isDefault: (child) => {
		if (child?.props?.path) {
			if (child?.props?.path === 'default') {
				return true;
			}
			return false;
		}
		return false;
	},
	push: function (path = '') {
		const url = new URL(window.location.origin + path);
		window.history.pushState({}, '', url);

		this.setCurrentView(path);
	}
};

export {
	routerComponent as Router,
	routerLinkComponent as RouterLink
};
