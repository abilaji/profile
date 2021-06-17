const togles = document.querySelector('.menuTogle');
const menuBar = document.querySelector('nav ul');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', window.scrollY > 0)
})

togles.addEventListener('click', () => {
  togles.classList.toggle('active')
})
togles.addEventListener("click", () => {
  menuBar.classList.toggle('active')
})
