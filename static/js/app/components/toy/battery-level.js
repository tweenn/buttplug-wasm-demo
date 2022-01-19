import { h } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default ({
	device
}) => {

	const [batteryLevel, setBatteryLevel] = useState(-1);

	const getBattery = async () => {
		const level = await device.batteryLevel();

		if (batteryLevel !== -1) {
			await new Promise(resolve => setTimeout(resolve, 10000));
		}

		setBatteryLevel(`${level * 100}%`);
	}

	getBattery();

	return html`
		<a class="mdl-button mdl-button--colored mdl-js-ripple-effect">
			Battery Level [${batteryLevel}]
		</a>
	`;
};
