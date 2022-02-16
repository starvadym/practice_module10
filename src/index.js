import menu from './menu.json';
import menuItem from './templates/menu-item.hbs';

const listRef = document.querySelector('.js-menu');

// const markup = menu.map(item => menuItem(item)).join('');
const markup = menuItem(menu);

// console.log(markup);

listRef.insertAdjacentHTML('afterbegin', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleSwitch = document.querySelector('#theme-switch-toggle');
const theme = localStorage.getItem('Theme');

if (!theme) {
    document.body.classList.add(Theme.LIGHT);
} else {
    document.body.classList.add(theme);
    if (theme === Theme.DARK) {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', onChange);

function onChange(e) {
    if (e.target.checked) {
        // document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        // localStorage.setItem('Theme', Theme.DARK);
        changeThemeAndSave(Theme.LIGHT, Theme.DARK);
        return
    }
        changeThemeAndSave(Theme.DARK, Theme.LIGHT);
}


function changeThemeAndSave(themeToRemove, themeToSet) {
    document.body.classList.replace(themeToRemove, themeToSet);
    localStorage.setItem('Theme', themeToSet);
}

