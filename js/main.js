import { renderUserList } from "./user.js";



const url = 'https://raw.githubusercontent.com/inga911/fetch/';
const source = 'main/data/users.json';
// fetch(url + source)
//     .then((res) => res.json())
//     .then(renderUserList);
//     .catch(console.error);
//     .finally(() => {
//     console.log('baigtas darbas');
// }

const res = await fetch(url + source);
const data = await res.json();
renderUserList(data);



const sourceCSS = 'main/style/style.css';
fetch(url + sourceCSS)
    .then(res => res.text())
    .then(css => {
        const headDOM = document.querySelector('head');
        document
            .querySelector('head')
            .insertAdjacentHTML('beforeend', `<style>${css}</style`)
    })