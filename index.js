// { <script>
//     // Select DOM Elements
// const navToggle = document.getElementById('nav-toggle');
// const navMenu = document.getElementById('nav-menu');
// const navClose = document.getElementById('nav-close');
// const navLinks = document.querySelectorAll('.nav_link');

//  Toggle Navigation Menu
// navToggle.addEventListener('click', () => {
//   navMenu.classList.add('show-menu');
// });

// navClose.addEventListener('click', () => {
//   navMenu.classList.remove('show-menu');
// });

//  Close Navigation Menu on Link Click
// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu');
//   });
// });


// </script> }
//  GitHubCalendar(".calendar", "rahulmk19");

// // or enable responsive functionality:
//  GitHubCalendar(".calendar", "rahulmk19", { responsive: true });

// ---------------------------------------------------------------------------------------------------------

var tablinks=document.getElementsByClassName("tab-links");
var tab_contents=document.getElementsByClassName("tab-contents");
//var tab_contents1=document.getElementsByClassName("tab-contents1");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  
  for(tab_content of tab_contents){
    tab_content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzBtA-sRIYcSeziSUVBa1gFM59zIyeTpkrqYFHrb1iY7rKJoUyoVEUUXfE2aFG5HsV5/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Message sent successfully"
      setTimeout(() => {
        msg.innerHTML=""
      }, 5000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


var sidemenu=document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}

