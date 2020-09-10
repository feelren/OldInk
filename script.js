let openBtn = document.querySelector('.nav__btn-open');
let closeBtn = document.querySelector('.nav__btn-close');
let navList = document.querySelector('.nav__list');

openBtn.addEventListener('click', function (e) {
    navList.classList.toggle('active-flex');
    closeBtn.style.display = 'flex';
    openBtn.style.display = 'none'
})

closeBtn.addEventListener('click', function (e) {
    navList.classList.toggle('active-flex');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'flex'
})