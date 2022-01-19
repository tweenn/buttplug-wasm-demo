
import { createElement, render } from 'https://unpkg.com/preact@latest?module';
// import { createElement, render, h } from 'https://unpkg.com/preact@latest?module';
// import htm from 'https://unpkg.com/htm?module';
// const html = htm.bind(h);

import App from './app/index.js';

import forceHTTPS from './app/services/https/index.js';

forceHTTPS();

render(createElement(App), document.body);
