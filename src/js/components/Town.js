export default class Town {
  constructor(data) {
    this._town = null;
    this.data = data;
  }

  _template() {
    const templateString = `<option class="searchTown__option"></option>`;
    const element = document.createElement('div');
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  create() {
    this._town = this._template();
    this._town.setAttribute('value', `${this.data}`);
    this._town.textContent = this.data;
    return this._town;
  }
}
