import menu from './menu.json';
import menuItem from './templates/menu-item.hbs';

const listRef = document.querySelector('.js-menu');

// const markup = menu.map(item => menuItem(item)).join('');
const markup = menuItem(menu);

console.log(markup);

listRef.insertAdjacentHTML('afterbegin', markup);