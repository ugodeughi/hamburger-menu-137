const menuToggle = document.querySelector('.header-right > a')
const closeButton = document.querySelector('.close');

// mostro il menu mobile
menuToggle.addEventListener('click', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  hamburgerMenu.classList.add('active')
})

// nascondo il menu mobile
closeButton.addEventListener('click', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  hamburgerMenu.classList.remove('active')
})