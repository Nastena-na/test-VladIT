export default class FormValidate {
  constructor(form) {
    this._form = form;
    this._input = this._form.elements.inputTown;
    this._button = this._form.querySelector('button');
    this._error = this._input.parentNode.parentNode.querySelector(
      `#${this._input.id}-error`
    );
  }

  validate() {
    if (!this._form.checkValidity()) {
      this._error.classList.add('searchTown__error_active');
      this._error.textContent = this._input.validationMessage;
      this._button.setAttribute('disabled', true);
    }
    if (this._form.checkValidity()) {
      this._error.classList.remove('searchTown__error_active');
      this._error.textContent = '';
      this._button.removeAttribute('disabled');
    }
  }
}
