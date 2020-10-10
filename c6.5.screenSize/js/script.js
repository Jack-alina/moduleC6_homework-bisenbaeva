const btn = document.querySelector('.j-get-screensize-btn');

btn.addEventListener('click', () => {
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	alert(`Ширина экрана: ${screenWidth}px; Высота экрана: ${screenHeight}px`);
});