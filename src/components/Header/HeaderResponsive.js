var headerMenu = document.querySelector('.headerMenu')
let mobileHeaderIcon = document.querySelector('mobileHeaderIcon')

mobileHeaderIcon.addEventListener('click', () => {
  headerMenu.classList.toggle('headerToggle');
});

export default HeaderResponsive;