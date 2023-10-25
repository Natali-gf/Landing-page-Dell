const form = document.getElementById('form');
const buttonSubmit = document.querySelector('.form__button');
const error = document.querySelector('.error');
const buttonError = document.querySelector('.error__button');
const errorText = document.querySelector('.error__text');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const formData = new FormData(form);

	const name = formData.get('name');
  	const phone = formData.get('phone');

	if(!/^[A-Za-zА-Яа-яЁё\s]+$/.test(name) || name === '') {
		error.style.display = 'flex';
		errorText.innerHTML = 'Введите имя. Только латинские или русские буквы.'
	} else if(/\D/.test(phone)
			  || phone.length < 10
			  || phone.length > 11
			  || phone === '') {
		error.style.display = 'flex';
		errorText.innerHTML = 'Введите номер телефона. Только цифры.'
	}else {
		const response = await fetch('https//...', {
			method: 'POST',
			body: formData,
		});
	}
});

buttonError.addEventListener('click', () => {
	error.style.display = 'none';
})