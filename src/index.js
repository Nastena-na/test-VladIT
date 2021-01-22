import './index.scss';
import apiTown from './js/modules/ApiTown';
import FormValidate from './js/components/FormValidate';
import Town from './js/components/Town';
import TownList from './js/components/TownList';

const formSearchTown = document.forms.formTown;
const inputSearchTown = formSearchTown.elements.inputTown;
const selectContainer = document.querySelector('.searchTown__select'); // контейнер с выпадающим списком
const formValidate = new FormValidate(formSearchTown);
const createTown = (...args) => new Town(...args); // создаём строчку с городом с любыми аргументами
const townList = new TownList(selectContainer, createTown); // наполняем контейнер

function handleForm() {
  formValidate.validate();
  selectContainer.classList.add('searchTown__select_active');

  apiTown
    .getTown(inputSearchTown.value)
    .then((res) => {
      console.log(res); // результаты от Api не удалось получить, поэтому эта функция на стадии разработки
      townList.render(res.result.name);
    })
    .catch((err) => {
      // обработка ошибок
      console.log(err);
    });
}

function changeValue() {
  const choiceTown =
    selectContainer.options[selectContainer.selectedIndex].value; // получаем значение из выпадающего списка
  if (Boolean(choiceTown) && !(selectContainer.value = 'none')) {
    // если выбрано значение, то задаём его полю ввода
    inputSearchTown.value = choiceTown;
    formValidate.validate();
  }
}

formSearchTown.addEventListener('input', handleForm);
selectContainer.addEventListener('onChange', changeValue);
