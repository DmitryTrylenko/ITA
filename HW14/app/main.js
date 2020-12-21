import { getUser } from './service.js';
import { getCompatibility } from './table.js';

const btn = document.querySelector('.btn-button');

btn.addEventListener('click', () => {
    getUser(setUser, '?gender=female');
    getUser(setUser, '?gender=male');

    function setUser(user){
        users.push(user);
        if(users.length == 2){
        users.forEach(({ picture }, i) => images[i].src = picture.large);
            console.log(getCompatibility(users));
        }
}

const users = [];
const images = [...document.querySelectorAll('.images img')];

document.querySelector('.btn-check').classList.add('show');
document.querySelector('.btn-check').classList.remove('hide');
const message = document.querySelector('.massage');

if (message) message.classList.add('hide');
});