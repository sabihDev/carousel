const carouselContainer = document.querySelector(".carousel-container");
const carouselControlsContainer = document.querySelector(".carousel-controls");
const carouselControls = ['previous', 'next'];
const carouselItems = document.querySelectorAll('.carousel-item');

class Carousel {
    constructor(container, items, controls) {
        this.galleryContainer = container;
        this.galleryControls = controls;
        this.carouselArray = [...items];
    }

    UpdateCarousel() {
        this.carouselArray.forEach(el => {
            el.classList.remove("carousel-item-1");
            el.classList.remove("carousel-item-2");
            el.classList.remove("carousel-item-3");
            el.classList.remove("carousel-item-4");
            el.classList.remove("carousel-item-5");
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`carousel-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'carousel-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.UpdateCarousel();
    }

    SetControls() {
        this.galleryControls.forEach(control => {
            const createButton = document.createElement('button');
            createButton.className = `carousel-controls-${control}`;
            carouselControlsContainer.appendChild(createButton);
            createButton.innerText = control;
        });
    }

    UseControls() {
        const triggers = [...carouselControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(carouselContainer, carouselItems, carouselControls);
exampleCarousel.SetControls();
exampleCarousel.UseControls();