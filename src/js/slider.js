import { sliderData } from "./data/sliderData";

const slider = document.querySelector('.slider');

showSlider();

function showSlider(currentIndex = 0) {
	let template = `
		<div class="slider__main">
			<div class="slider__description description">
				${sliderData[currentIndex].description}
			</div>
			<div class="slider__title title">${sliderData[currentIndex].title}</div>
			<div class="slider__go-link">
				<a class="slider__go-link_icon go-link" href="#"></a>
				<a class="slider__go-link_text" href="#">Побробнее</a>
			</div>
			<div class="slider__scroll">
				<a class="slider__scroll_link" href="#catalog">Scroll to catalog</a>
			</div>
			<img class="slider__image"
				 src="${sliderData[currentIndex].imageSrc}"
				 alt="${sliderData[currentIndex].title}">
			<div class="slider__switch">
				<div class="slider__switch_dots"></div>
				<a class="slider__switch_arrow" href="#"></a>
			</div>
		</div>
		<div class="slider__secondary">
			<div class="slider__secondary_back"></div>
			<div class="slider__secondary_text">
				${sliderData[currentIndex].subtitle}
			</div>
			<img class="slider__secondary_image"
				src="${sliderData[currentIndex].secondaryImageSrc}"
				alt="${sliderData[currentIndex].subtitle}">
		</div>
		`;

	let dotTemplate = '';
	for (let i = 0; i < sliderData.length; i++) {
		dotTemplate += `
			<div class="${currentIndex === i ? 'dot_active' : 'dot'}"></div>`;
	}

	slider.innerHTML = template;
	const dots = document.querySelector('.slider__switch_dots');
	const arrow = document.querySelector('.slider__switch_arrow');
	dots.innerHTML = dotTemplate;

	arrow.addEventListener('click', () => {
		const nextIndex = currentIndex < sliderData.length - 1 ? currentIndex + 1 : 0;
		showSlider(nextIndex);
	})
}
