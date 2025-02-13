const button = document.getElementById('nobutton');

button.addEventListener('click', function(){
	if (button.textContent === 'no') {
		button.textContent = 'are you really sure?';
	} else {
		button.textContent = 'no';
	}
})