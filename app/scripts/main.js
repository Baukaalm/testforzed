const dropdownElement = document.querySelector('.js-drop-down');
const searchdownElement = document.querySelector('.js-drop-down-search');
const searchInputElement = document.querySelector('.js-header-input');
const searchArrowElement = document.querySelector('.js-header-arrow');


const checkEvents = (event) => {
  if (!event.target.matches('.js-drop-down')) {

    const dropdowns = document.querySelectorAll('.js-drop-down-content');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('_show')) {
        openDropdown.classList.remove('_show');
        dropdownElement.classList.remove('_active');
      }
    }
  }
  if (!event.target.matches('.js-drop-down-search') &&
    !event.target.matches('.js-search-down-block') &&
    !event.target.matches('.js-header-input')) {
    document.querySelector('.js-search-down-block').classList.remove('_show');
    searchArrowElement.classList.remove('_active');
    searchInputElement.value = '';
  }
}

const isClickedDropDown = () => {
  document.querySelector('.js-drop-down-content').classList.toggle('_show');
  dropdownElement.classList.toggle('_active');
}

const isClickedSearchDown = () => {
  document.querySelector('.js-search-down-block').classList.toggle('_show');
  searchInputElement.value = '';
  searchArrowElement.classList.toggle('_active');
}

window.addEventListener('click', checkEvents);
dropdownElement.addEventListener('click', isClickedDropDown);
searchdownElement.addEventListener('click', isClickedSearchDown);
