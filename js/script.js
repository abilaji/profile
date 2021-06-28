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

const textArray = ["Frontend developer", "Web designer", "UI/UX designer"];
let textArrIndex = 0;
let i = 0;

function type() {
  if (i < textArray[textArrIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    textSpan.textContent += textArray[textArrIndex].charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, 2000);
  }

  function erase() {
    if (i > 0) {
      if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      textSpan.textContent = textArray[textArrIndex].substring(0, i - 1);
      i--;
      setTimeout(erase, 100);
    } else {
      cursorSpan.classList.remove('typing');
      textArrIndex++;
      if (textArrIndex >= textArray.length) textArrIndex = 0;
      setTimeout(type, 200 + 1100);
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length);
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

//smoothScroll
let posY = 0;
const jarak = 15;

function Scroll(id) {
  const target = document.getElementById(id).offsetTop;

  const scrollAnimate = setTimeout(function () {
    Scroll(id);
  }, 5);

  posY = posY + jarak;
  // pengkondisian
  if (posY >= target) {
    clearTimeout(scrollAnimate);
    posY = 0;
  } else {
    window.scroll(0, posY);
  }
  return false;
}
// const content = document.querySelector('.main-content');
// scrollnav.init(content);

// skills effect

// const listArrow = document.querySelector('.arrow');

// listArrow.addEventListener('click', ()=>{
//   listArrow.classList.toggle('menuActive');
// })

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function desainList() {
  document.getElementById("dropdown").classList.toggle('showDesain');
}
window.onclick = function (event) {
  if (!event.target.matches('.dropDesain')) {
    const drop_downs = document.getElementsByClassName("dropdownDesain");
    let i;
    for (i = 0; i < drop_downs.length; i++) {
      const openDropdown = drop_downs[i];
      if (openDropdown.classList.contains('showDesain')) {
        openDropdown.classList.remove('showDesain');
      }
    }
  }
}

// send contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzY8ZjPOtXfBJyZXIDORR4VNxyJTDnjk7tliwrsnQtvvMf-zWOAexllMkThNuWBDyoA/exec'
const form = document.forms['my-contact']
const btnKirm = document.querySelector('.btn-kirim')
const myAlert = document.querySelector('.alert')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      myAlert.classList.toggle('alert')
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})