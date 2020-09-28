// ---------- НАВИГАЦИЯ смена кнопок "открыть\закрыть" и скрытие меню по нажатию линков
// -------------------------------------------------------------------------


let openBtn = document.querySelector(".nav__btn-open");
let closeBtn = document.querySelector(".nav__btn-close");
let navList = document.querySelector(".nav__list");
let move = document.querySelectorAll(".move");

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

move.forEach(item => item.addEventListener('click', function () {
    if (navList.classList.contains('active-flex')) {
        closeBtn.click();
    }
}));








// ----------- ГАЛЕРЕЯ переключение блоков по кнопкам
// -------------------------------------------------------------------------

let galleries = document.querySelectorAll('.gallery-photos__grid');
let galleryBtns = document.querySelectorAll('.gallery-photos__btn');

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
// -------------------------------------------------------------------------

let mw425px = window.matchMedia('(max-width: 425px)').matches;
let galleryGrids = document.querySelectorAll('.grid');
let screenWidth = document.documentElement.clientWidth;


// ---Из каждого .gallery__grid берем все .grid__item кроме первых двух:

let hideGalleryItems = function () {
    galleryGrids.forEach(function (galleryGrid) {
        let childsArr = Array.from(galleryGrid.children);

        childsArr = childsArr.slice(1, (childsArr.length - 1));

        childsArr.forEach(function (img) {
            img.style.display = 'none';
        })
    })
}

let showGalleryItems = function () {
    galleryGrids.forEach(function (galleryGrid) {
        let childsArr = Array.from(galleryGrid.children);

        childsArr = childsArr.slice(1, (childsArr.length - 1));

        childsArr.forEach(function (img) {
            img.style.display = 'block';
        })
    })
}


let galleryItemHider = function () {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth <= 425) {
        hideGalleryItems();
    } else showGalleryItems();
}

window.addEventListener('resize', galleryItemHider);






// ---------- Подсказка при работе с формой
// -------------------------------------------------------------------------


let form = document.querySelector('.contacts__form');
let label = document.querySelector('textarea');

let showNotification = function (e) {
    let noteExists = document.querySelector('.note');

    if (e.target.tagName == 'LABEL') e.preventDefault();
    if (!noteExists) {
        let note = document.createElement('div');
        let coords = form.getBoundingClientRect();

        note.classList.add('note');
        note.innerHTML = 'Данная форма пока не работает, она находится в разработке :(';

        note.style.position = 'fixed';
        note.style.maxWidth = '80%';
        note.style.borderRadius = '6px';
        note.style.padding = '10px';
        note.style.color = 'white';
        note.style.backgroundColor = 'red';

        form.append(note);
        note.style.top = coords.top - note.offsetHeight - 10 + 'px';

        setTimeout(() => note.remove(), 4000);
    }
}

form.addEventListener('click', showNotification);