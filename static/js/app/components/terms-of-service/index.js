import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// REFACTOR THIS PROPS
export default (props) => {

	const id = props.id || `${(new Date()).getTime()}-${Math.random()}`;

	const shouldShowDialog = async () => {
		await new Promise(r => setTimeout(r, 100));
		if (props.show) {
			document.getElementById(id).showModal();
		} else {
			document.getElementById(id).close();
		}
	}

	const closeDialog = () => {
		if (props.setShow) {
			props.setShow(false);
		}
	}

	shouldShowDialog();

	return html`
		<dialog class="mdl-dialog " id="${id}">
			<h4 class="mdl-dialog__title">
				This is a 18+ App
			</h4>
			<div class="mdl-dialog__content">
				<ul>
					<li>
						You should be 18+ to play around with this.
					</li>
					<li>
						You should have a ButtPlug compatible "toy", please check <a href="https://iostindex.com/?filter0ButtplugSupport=4" target="_blank" referrer="no-referrer">this list</a> if you have it
					</li>
				</ul>
			</div>
			<div class="mdl-dialog__actions">
				<button type="button" class="mdl-button mdl-button--raised mdl-button--colored" onClick="${closeDialog}">
					I Agree
				</button>
			</div>
		</dialog>
	`;
};


