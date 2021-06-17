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

// =======================
const textSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor')

const textArray = ["Frontend developer","Web designer","UI/UX designer"];
let textArrIndex = 0;
let i = 0;

function type(){
  if(i<textArray[textArrIndex].length){
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    textSpan.textContent += textArray[textArrIndex].charAt(i);
    i++;
    setTimeout(type, 100);
  }
  else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, 2000);
  }
  function erase() {
    if(i > 0){
      if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      textSpan.textContent = textArray[textArrIndex].substring(0,i-1);
      i--;
      setTimeout(erase,100);
    }
    else{
      cursorSpan.classList.remove('typing');
      textArrIndex++;
      if(textArrIndex >= textArray.length) textArrIndex=0;
      setTimeout(type, 200 + 1100);
    }
  }
}
document.addEventListener('DOMContentLoaded', function(){
  if(textArray.length);
  setTimeout(type, 2000 + 250);
});
// function typing(){
//   if( i < text.length){
//     document.getElementById('text').innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typing,80);
//   }
// }
// typing();