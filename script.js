let openBtn = document.querySelector(".nav__btn-open");
let closeBtn = document.querySelector(".nav__btn-close");
let navList = document.querySelector(".nav__list");
let navBtn = document.querySelector(".nav__btn");
let nav = document.querySelector(".nav");

openBtn.addEventListener("click", function (e) {
    navList.classList.toggle("active-flex");
    closeBtn.style.display = "flex";
    openBtn.style.display = "none";
});

closeBtn.addEventListener("click", function (e) {
    navList.classList.toggle("active-flex");
    closeBtn.style.display = "none";
    openBtn.style.display = "flex";
});

// ----------- ГАЛЕРЕЯ переключение блоков по кнопкам

let galleries = document.querySelectorAll('.gallery__grid');
let galleryBtns = document.querySelectorAll('.gallery__btn');

galleryBtns.forEach(item => item.addEventListener('click', function (e) {
    if (e.target == galleryBtns[0]) openGalPhoto();
    else if (e.target == galleryBtns[1]) openGalImage();
    else if (e.target == galleryBtns[2]) openGalPicture();
}));

function openGalPhoto() {
    galleries.forEach(item => item.classList.remove('active-grid'));
    galleries[0].classList.add('active-grid');
    galleryBtns.forEach(item => item.classList.remove('active-underline'));
    galleryBtns[0].classList.add('active-underline');
}

function openGalImage() {
    galleries.forEach(item => item.classList.remove('active-grid'));
    galleries[1].classList.add('active-grid');
    galleryBtns.forEach(item => item.classList.remove('active-underline'));
    galleryBtns[1].classList.add('active-underline');
}

function openGalPicture() {
    galleries.forEach(item => item.classList.remove('active-grid'));
    galleries[2].classList.add('active-grid');
    galleryBtns.forEach(item => item.classList.remove('active-underline'));
    galleryBtns[2].classList.add('active-underline');
}







// ------------------------- ГАЛЕРЕЯ уменьшение кол-ва фото при узком экране

let mw425px = window.matchMedia('(max-width: 425px)').matches;
let galleryGrids = document.querySelectorAll('.gallery__grid');
let screenWidth = document.documentElement.clientWidth;


// ---Из каждого .gallery__grid берем все .grid__item кроме первых двух:

let hideGalleryItems = function () {
    galleryGrids.forEach(galleryGrid => Array.from(galleryGrid.children).slice(1, 5).forEach(item => item.style.display = 'none'));
}

let showGalleryItems = function () {
    galleryGrids.forEach(galleryGrid => Array.from(galleryGrid.children).slice(1, 5).forEach(item => item.style.display = 'block'));
}

let galleryItemHider = function () {
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth <= 425) {
        hideGalleryItems();
    } else showGalleryItems();
}

window.addEventListener('resize', galleryItemHider);

window.addEventListener('DOMContentLoaded', galleryItemHider);