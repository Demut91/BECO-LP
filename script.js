const nav = document.getElementById ('nav');
const menu = document.getElementById ('menu');
const button = document.getElementById ('burger-button');
const menuBurger = document.getElementById ('menuBurger');

button.addEventListener ('click', e => {
  e.preventDefault ();
  nav.classList.toggle ('active');
  menu.classList.toggle ('active');
  button.classList.toggle ('active');
  menuBurger.classList.toggle ('active');
});
