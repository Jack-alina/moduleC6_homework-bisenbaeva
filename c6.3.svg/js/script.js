const btn = document.querySelector('.j-change-icon-btn');
const _icon = document.querySelector('.j-icon');

const firstIconAtribute = `width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle"
fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="padding-left: 10px;"`;

const firstIconValue = `
<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path fill-rule="evenodd" d="M10.828 5.172a.5.5 0 0 0-.707 0L6.025 9.268V6.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H9.5a.5.5 0 0 0 0-1H6.732l4.096-4.096a.5.5 0 0 0 0-.707z"/>
`;

const secondIconAtribute = `width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill"
fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="padding-left: 10px;"`;

const secondIconValue = `
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
`;

let clickCount = 0;
btn.addEventListener('click', () => {
	clickCount += 1;
	if(clickCount%2 === 0) {
		_icon.setAttribute = firstIconAtribute;
		_icon.innerHTML = firstIconValue;
	}
	else {
		_icon.setAttribute = secondIconAtribute;
		_icon.innerHTML = secondIconValue;
	}
});