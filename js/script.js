const togles = document.querySelector('.menuTogle');
const menuBar = document.querySelector('nav ul');

togles.addEventListener('click', () => {
  togles.classList.toggle('active')
})
togles.addEventListener("click", () => {
  menuBar.classList.toggle('active')
})
