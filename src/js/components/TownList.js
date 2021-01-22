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
    towns.forEach((town) => {
      //каждая строчка с названием города из массива добавляется в контейнер
      this._addCard(town);
    });
  }
}
