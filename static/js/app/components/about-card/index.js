import { h } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export default ({
	card
}) => {

	return html`
		<div class="full-card mdl-cell mdl-cell--3-col">
			<div class="mdl-card mdl-shadow--2dp">
				<div class="mdl-card__title mdl-card--expand">
					<h2 class="mdl-card__title-text">
						${card?.title}
					</h2>
				</div>
				<div class="mdl-card__supporting-text">
					${card?.description}
				</div>
				<div class="mdl-card__actions mdl-card--border">
					<a class="mdl-button mdl-button--colored mdl-js-ripple-effect full-width"
						href="${card?.cta?.href}" target="_blank" referrer="no-referrer"
					>
						${card?.cta?.title}
					</a>
				</div>
			</div>
		</div>
	`;
};


