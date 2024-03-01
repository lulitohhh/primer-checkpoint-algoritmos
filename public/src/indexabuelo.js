import * as appContainer from './components/indexpadre.js';
import data from './data/data.js'

class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'description', 'value', 'inStock'];
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML();
		`
    `;
	}

data.forEach(element => {


});
	attributeChangedCallback(propNameName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

window.customElements.define('card', Card);

``;
