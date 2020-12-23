const buttonBack = document.querySelectorAll(".services__section .btn__back");
const buttonNext = document.querySelectorAll(".services__section .btn__next");
const sectionContent = document.querySelectorAll(".carousel__box .box__section");
const titleContent = document.querySelectorAll(".carousel__box .services__title");
const descriptionContent = document.querySelectorAll(".carousel__box .services__description");

buttonNext.forEach((item) => {
	item.addEventListener("click", () => {
		sectionContent[0].classList.add("box__section--inactive");
		titleContent[1].classList.add("animT");
		titleContent[0].classList.remove("animT");
		descriptionContent[1].classList.add("animP");
		descriptionContent[0].classList.remove("animP");
	});
});

buttonBack.forEach((item) => {
	item.addEventListener("click", () => {
		sectionContent[0].classList.remove("box__section--inactive");
		titleContent[0].classList.add("animT");
		titleContent[1].classList.remove("animT");
		descriptionContent[0].classList.add("animP");
		descriptionContent[1].classList.remove("animP");
	});
});