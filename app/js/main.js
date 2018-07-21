var callback = document.querySelector('.callback');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.modal__close');

callback.addEventListener('click', function() {
	modal.classList.add('show');
	overlay.classList.add('show');
});

close.addEventListener('click', function() {
	modal.classList.remove('show');
	overlay.classList.remove('show');
});