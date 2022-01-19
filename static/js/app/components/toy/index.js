import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

import Vibrate from './vibrate.js';
import Stop from './stop.js';
import BatteryLevel from './battery-level.js';

const html = htm.bind(h);

export default ({
	device
}) => {
	const name = device.Name || 'Toy Name';
	const attributes = device.AllowedMessages || [];

	const messageTypes = Object.keys(Buttplug.ButtplugDeviceMessageType).filter((type) => {
		return  attributes.includes(Buttplug.ButtplugDeviceMessageType[type]);
	});

	return html`
		<div class="full-card mdl-cell mdl-cell--2-col">
			<div class="mdl-card mdl-shadow--2dp">
				<div class="mdl-card__title mdl-card--expand">
					<h2 class="mdl-card__title-text">
						${name}
					</h2>
				</div>
				<div class="mdl-card__supporting-text">
					<ul>
						${messageTypes.map((command) => {
							return html`<li>${command}</li>`
						})}
					</ul>
				</div>
				<div class="mdl-card__actions mdl-card--border">
					${attributes.map((command) => {
						let toReturn;

						switch (command) {
							case Buttplug.ButtplugDeviceMessageType.VibrateCmd:
								toReturn = html`<${Vibrate} device="${device}" />`;
								break;
							case Buttplug.ButtplugDeviceMessageType.StopDeviceCmd:
								toReturn = html`<${Stop} device="${device}" />`;
								break;
							case Buttplug.ButtplugDeviceMessageType.BatteryLevelCmd:
								toReturn = html`<${BatteryLevel} device="${device}" />`;
								break;
						}
						return toReturn || html`, ${command}`;
					})}
				</div>
			</div>
		</div>
	`;
};
