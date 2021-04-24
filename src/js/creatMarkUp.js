import menu from '../data/menu.json'

import template from '../templates/menuTemplates.hbs';

console.log('menu', menu);
console.log('template', template);

const refs = {
    menuList: document.querySelector('.js-menu'),
    swich: document.querySelector('.theme-switch__toggle'),
    body: document.body

}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const murkup = template(menu);

refs.menuList.insertAdjacentHTML('beforeend', murkup);

refs.swich.addEventListener('change', onChengeTheme);

function onChengeTheme(event) {
  if (event.target.checked) {
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);

      return 
  } 
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}
 
refs.body.classList.add
    (localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme') );

//console.log('localStorage.getItem', localStorage.getItem('theme'));

refs.swich.checked = localStorage.getItem('theme') === Theme.DARK;

