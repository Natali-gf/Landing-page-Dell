const btnBurger = document.querySelector('.menu__burger');
const navigation = document.querySelector('.header__navigation_burger');

btnBurger.addEventListener('click', () => {
	// navigation.style.display = 'block';
	navigation.classList.toggle('show');
	btnBurger.classList.toggle('menu__burger_close');
})