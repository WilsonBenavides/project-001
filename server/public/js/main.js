var timer = document.getElementById('timer');
var timer2 = document.getElementById('timer2');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
//rooster 1
var cock1Lbl = document.getElementById("cock1");
var name1Text = document.getElementById("localRooster");
var edit1Btn = document.getElementById("edit1");
//rooster 2
var cock2Lbl = document.getElementById("cock2");
var name2Text = document.getElementById("visitorRooster");
var edit2Btn = document.getElementById("edit2");
//gallera principal
var galleraLbl = document.getElementById("gallera");
var name3Text = document.getElementById("galleraInput");
var edit3Btn = document.getElementById("edit3");
//apuestas
var bedLbl = document.getElementById("bed");
var bedText = document.getElementById("bedValue");
var bedBtn = document.getElementById("editBed");
//Número de pelea
var fightLbl = document.getElementById("fight");
var fightText = document.getElementById("fightNoText");
var fightBtn = document.getElementById("fightNoBtn");
//

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

edit1Btn.addEventListener('click', function() {
	console.log(name1Text.value);
	console.log("edit 1 click....");
	cock1Lbl.style.visibility='visible';
	cock1Lbl.innerHTML=name1Text.value;
	edit1Btn.style.visibility='hidden';
	name1Text.style.visibility='hidden';
});

cock1Lbl.addEventListener('click', function() {
	console.log("lbl 1 click....");
	edit1Btn.style.visibility='visible';
	name1Text.style.visibility='visible';
	cock1Lbl.style.visibility='hidden';
});

edit2Btn.addEventListener('click', function() {
	console.log(name2Text.value);
	console.log("edit 2 click....");
	cock2Lbl.style.visibility='visible';
	cock2Lbl.innerHTML=name2Text.value;
	edit2Btn.style.visibility='hidden';
	name2Text.style.visibility='hidden';
});

cock2Lbl.addEventListener('click', function() {
	console.log("lbl 2 click....");
	edit2Btn.style.visibility='visible';
	name2Text.style.visibility='visible';
	cock2Lbl.style.visibility='hidden';
});

edit3Btn.addEventListener('click', function() {
	console.log(name3Text.value);
	console.log("edit 2 click....");
	galleraLbl.style.visibility='visible';
	galleraLbl.innerHTML=name3Text.value;
	edit3Btn.style.visibility='hidden';
	name3Text.style.visibility='hidden';
});

galleraLbl.addEventListener('click', function() {
	console.log("lbl 2 click....");
	edit3Btn.style.visibility='visible';
	name3Text.style.visibility='visible';
	galleraLbl.style.visibility='hidden';
});

bedBtn.addEventListener('click', function() {
	//console.log(name3Text.value);
	//console.log("edit 2 click....");
	bedLbl.style.visibility='visible';
	bedLbl.innerHTML=bedText.value;
	bedBtn.style.visibility='hidden';
	bedText.style.visibility='hidden';

});

bedLbl.addEventListener('click', function() {
	console.log("bed lbl click....");
	bedBtn.style.visibility='visible';
	bedText.style.visibility='visible';
	bedText.style.left = 30;
	bedLbl.style.visibility='hidden';
});

fightBtn.addEventListener('click', function() {

	console.log(fightText.value);
	console.log("fight no click....");
	fightLbl.style.visibility='visible';
	fightLbl.innerHTML=fightText.value;
	fightBtn.style.visibility='hidden';
	fightText.style.visibility='hidden';

});

fightLbl.addEventListener('click', function() {
	console.log("fight lbl click....");
	fightBtn.style.visibility='visible';
	fightText.style.visibility='visible';
	fightLbl.style.visibility='hidden';
});
