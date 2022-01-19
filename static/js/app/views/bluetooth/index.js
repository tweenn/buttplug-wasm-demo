import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

import ButtPlug from '../../services/buttplug/index.js';

import Toy from '../../components/toy/index.js';

const html = htm.bind(h);

const clickScan = () => {
	ButtPlug.scan();
}

export default () => {

	const [connectedDevices, setConnectedDevices] = useState([]);

	ButtPlug.init(setConnectedDevices);

	return html`
		<div class="mdl-grid center-flex">
			<div class="full-card mdl-cell mdl-cell--3-col">
				<div class="mdl-card mdl-shadow--2dp">
					<div class="mdl-card__title mdl-card--expand">
						<h2 class="mdl-card__title-text">
							Let's get started
						</h2>
					</div>
					<div class="mdl-card__supporting-text">
						Click on the button below to start scanning, select a device and pair to see it in the list below
					</div>
					<div class="mdl-card__actions mdl-card--border">
						<a class="mdl-button mdl-button--colored mdl-js-ripple-effect full-width"
							onClick="${clickScan}"
						>
							Scan for toys
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mdl-grid center-flex">
			${
				connectedDevices.map((device) => {
					return html`<${Toy} device="${device}" />`;
				})
			}
		</div>
	`;
};


