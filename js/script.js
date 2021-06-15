const togles = document.querySelector('.menuTogle');
const menuBar = document.querySelector('nav ul');

togles.onclick = function(){
  togles.classList.toggle('active')
};

togles.addEventListener("click", function(){
  menuBar.classList.toggle('active');
});
