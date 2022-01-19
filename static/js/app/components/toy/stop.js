import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default ({
	device
}) => {

	const clicked = () => {
		device.stop();
	}

	return html`
		<a class="mdl-button mdl-button--colored mdl-js-ripple-effect"
			onClick="${clicked}"
		>
			Stop
		</a>
	`;
};
