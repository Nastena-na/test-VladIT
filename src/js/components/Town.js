export default class Town {
  constructor(data) {
    this._town = null;
    this.data = data;
  }

  _template() {
    const templateString = `<li class="searchTown__option"></li>`;
    const element = document.createElement('div');
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  create() {
    this._town = this._template();
    this._town.innerHTML = `${this.data.name}`;
    this._town.setAttribute('data-value', `${this.data.name}`);
    return this._town;
  }
}
