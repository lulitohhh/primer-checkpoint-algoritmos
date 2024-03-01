// <card></card>
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
		<link rel='stylesheet' src='card.css' />;
		this.shadowRoot.innerHTML();
		`
    <section>
    <h1> ${this.title}</h1>
    <p> ${this.description}</p>
    <p> ${this.value}</p>
    <p> ${this.inStock}</p>
    </section>
    `;
	}
	attributeChangedCallback(propNameName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

window.customElements.define('card', Card);
export default Card;
``;
