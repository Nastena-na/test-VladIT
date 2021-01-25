import './index.scss';
import FormValidate from './js/components/FormValidate';
import Town from './js/components/Town';
import TownList from './js/components/TownList';
import jsonp from 'jsonp'; // скачиваем его через npm и импортируем

const formSearchTown = document.forms.formTown;
const inputSearchTown = formSearchTown.elements.inputTown;
const selectContainer = formSearchTown.querySelector('.searchTown__select'); // контейнер с выпадающим списком
const formValidate = new FormValidate(formSearchTown);
const createTown = (...args) => new Town(...args); // создаём строчку с городом с любыми аргументами
const townList = new TownList(selectContainer, createTown); // наполняем контейнер

function handleForm() {
  formValidate.validate();

  if (!formSearchTown.checkValidity()) {
    selectContainer.classList.remove('searchTown__select_active');
  }

  if (formSearchTown.checkValidity()) {
    selectContainer.innerHTML = '';
    selectContainer.classList.add('searchTown__select_active');

    const townUrl =
      NODE_ENV === 'production'
        ? 'https://kladr-api.ru'
        : 'http://kladr-api.ru';

    const obj = {
      url: `${townUrl}/api.php?`,
      query: `${inputSearchTown.value}`,
      type: 'city',
      parent: 1,
      limit: 200,
    };

    const url = `${obj.url}query=${obj.query}&contentType=${obj.type}&withParent=${obj.parent}&limit=${obj.limit}`;

    function callback(e, res) {
      townList.render(res.result);
    }

    jsonp(url, {}, callback); // передаём jsonp три параметра
  }
}

function changeValue({ target }) {
  formValidate.validate();
  const item = target.closest('.searchTown__option'); // выбираем элемент, на который нажали
  if (!!item) {
    // если выбрали
    inputSearchTown.value = item.dataset.value; // присваиваем значению поля ввода значение из data-атрибута
    selectContainer.classList.remove('searchTown__select_active');
  }
}

formSearchTown.addEventListener('input', handleForm);
selectContainer.addEventListener('click', changeValue);
