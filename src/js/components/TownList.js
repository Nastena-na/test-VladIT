export default class TownList {
  constructor(container, callback) {
    this._container = container;
    this._callback = callback;
  }

  _addCard(elem) {
    const template = this._callback(elem); //создаётся строчка с названием города
    this._container.append(template.create()); //и добавляется в контейнер
  }

  render(towns) {
    for (let i = 1; i < towns.length; i++) {
      this._addCard(towns[i]);
    }
  }
}
