import {
  getTemp
} from './util.js';

const tempNode = await getTemp('#input-range-template');

class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    }).appendChild(tempNode);

    this.init();
  }

  get min() {
    return this.getAttribute('min') || '';
  }

  get max() {
    return this.getAttribute('max') || '';
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  set value(val) {
    this.setAttribute('value', val);
  }

  $(sel) {
    return this.shadowRoot.querySelector(sel);
  }

  init() {
    this.$('#min').textContent = this.min;
    this.$('#max').textContent = this.max;
    this.$('#myRange').value = this.value;
    this.$('#myRange').min = this.min;
    this.$('#myRange').max = this.max;
    this.$('#rangeVal').textContent = this.value;

    this.$('#myRange').addEventListener('input', (e) => {
      this.$('#rangeVal').textContent = this.value = e.target.value;
      this.dispatchEvent(new CustomEvent('input'));
    });
  }
}

{
  const TAG = 'input-range';

  if (!customElements.get(TAG)) {
    customElements.define(TAG, InputRange);
  }
}