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





let media425 = window.matchMedia('(max-width: 425px)');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');
let navLogo = document.querySelector('.nav__logo');





// setInterval(func, 1);

// function func() {
//     if (media425.matches) {
//         // body.style.backgroundColor = 'white';

//         if (nav.offsetTop > 646) {
//             navLogo.style.display = 'none';
//         } else navLogo.style.display = 'block';
//     }
// }