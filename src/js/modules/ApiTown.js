import { configTown } from '../constants/constants';

class ApiTown {
  constructor(config) {
    this._url = config.url;
    this._type = config.type;
    this._limit = config.limit;
  }
  getTown(inputValue) {
    return fetch(
      `${this._url}query=${inputValue}&contentType=${this._type}&limit=${this._limit}`,
      { method: 'GET' }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

const apiTown = new ApiTown(configTown);
export default apiTown;
