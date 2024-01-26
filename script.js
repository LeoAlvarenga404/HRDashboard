const menu = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu-list ul li a');

const search = document.querySelector('.search')
const searchIcon = document.querySelector('.search img')

menu.addEventListener('click', () => {
    body.classList.toggle('appear');
    search.classList.remove('appear')
    menuLinks.forEach(a => {
      a.classList.toggle('appear')
    });
    
  });

searchIcon.addEventListener('click', () => {
  search.classList.toggle('appear')
  body.classList.add('grid')
})