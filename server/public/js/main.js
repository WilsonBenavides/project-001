var timer = document.getElementById('timer');
var timer2 = document.getElementById('timer2');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch({
	elem: timer,
	elem2: timer2,
	delay: 1
});

function start() {
	watch.start();
	toggleBtn.textContent = 'Detener';
}

function stop() {
	watch.stop();
	toggleBtn.textContent = 'Iniciar';
}

toggleBtn.addEventListener('click', function() {
	(watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function() {
	watch.reset();
});
