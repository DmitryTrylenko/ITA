import { secondMethod } from './dots.js';

const dropdown = document.getElementsByClassName('dropdown-child')[0];
    dropdown.addEventListener('input', (event) => {
        const spinnerType = event.currentTarget.options[event.target.selectedIndex].value;
        const previewElement = document.getElementsByClassName('preview')[0];
        previewElement.classList = '';
        previewElement.classList.add('preview', spinnerType);

        const previewElement = document.querySelector(`.preview.${spinnerType}`);
        const pseudoElementStyle = getComputedStyle(previewElement, '::after');

        document.title = pseudoElementStyle.content.replace(/"/g, '\'');

        setInterval(() => {
            const t = document.title;
            document.title = t.slice(1) + t.slice(0, 1);
        }, 100);

    });

    window.addEventListener('load', (event) => {
        let items = [];

        if (localStorage.getItem('lastVisits')) {
            items = JSON.parse(localStorage.getItem('lastVisits'));

            for (let i = 0; i< items.length; i++) {
                document.getElementById('last-visit').innerHTML += `<div>${items[i]} </div>`;
            }
        }
    });

    window.addEventListener('beforeunload', function(e){
        let items = [];
        const lastVisitDate = new Date().toLocaleString();
        if (localStorage.getItem('lastVisits')) {
            items = JSON.parse(localStorage.getItem('lastVisits'));
        }
        localStorage.setItem('lastVisits', JSON.stringify(items.concat(lastVisitDate)));
    }, false);

    const elements = {
        dots1 : '⠁⠂⠄⡀⢀⠠⠐⠈',
        dots2 : '⣾⣽⣻⢿⡿⣟⣯⣷',
        arrow1 : '▶▼◀▲',
        arrow2 : '⬅↖⬆↗➡↘⬇↙',
        pipe : '⊢⊤⊣⊥',
        stars : '✹✵✯☆'
    };