import { AddClickListener } from './Reuseables.js';

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

let images = document.querySelectorAll('.carousel-container');
let index = 0;

AddClickListener(nextButton,next);
AddClickListener(prevButton,prev)

function next() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

function prev() {
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
}