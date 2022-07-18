'use strict'
let array = [
	['img/track_list/gruppy.jpg', 'img/track_list/valentina.jpg', 'img/track_list/kak_v_perviy_raz.jpg', 'img/track_list/diana.jpg', 'img/track_list/santa.jpg', 'img/track_list/cveti.jpg', 'img/track_list/sluchaino.jpg', 'img/track_list/mlecnhiy.jpg'],
	['Групи', 'Валентина', 'Как в первый раз', 'Диана (На грязном)', 'Санта Клаус', 'Все цветы вокруг меня цветут', 'Случайна', 'Млечный путь'],
	['Платина && OG Buda', 'Платина', 'Платина', 'Платина', 'Платина', 'Платина & 104', 'Платина', 'Платина & OG Buda'],
	['grupy.mp3', 'valentina.mp3', 'platina_kak_v_perviy_raz.mp3', 'diana.mp3', 'santa.mp3', 'cveti.mp3', 'sluchaino.mp3', 'mlechniy.mp3'],
	["#0DC2FF", "#007DE8", "#0E5DFF", "#0C28EB", "#1600FF", '#7a07f5', '#aa07f5', '#0782f5']
]
let url = 'audio/'  //задаем в переменную путь к папке с треками
let audio = new Audio();
let song = document.querySelector('.song');
let index = 0; // трек по умотчанию
function selecting_track(direction) {
	index += direction;
	if (index >= array[0].length) index = 0;
	if (index < 0) index = array[0].length - 1;
	play_track(index);
	playPause.src = 'img/button/pause.png';
	audio.play();
}
function play_track(ind) {
	image.src = array[0][ind];
	document.querySelector('.track').innerText = array[1][ind];
	document.querySelector('.artist').innerText = array[2][ind];
	audio.src = url + array[3][ind];
	audio.onloadedmetadata = function () { duration.innerText = formatingTime(this.duration) };
	document.bgColor = array[4][ind];
}
function play_pause(e) {
	if (audio.paused) {
		audio.play();
		e.src = 'img/button/pause.png';
	} else {
		audio.pause();
		e.src = 'img/button/play.png';
	}
}


audio.ontimeupdate = function () {
	song.value = audio.currentTime / audio.duration * 100;
	currentTime.innerText = formatingTime(audio.currentTime);
}
function formatingTime(time) {
	let s = Math.floor(time % 60);
	return Math.floor(time / 60) + ':' + (s < 10 ? '0' + s : s);
}
audio.onended = function () { selecting_track(1) };
song.oninput = function () { audio.currentTime = this.value / 100 * audio.duration };
song.value = 0;
volume.value = 80;
currentTime.innerText = formatingTime(audio.currentTime);
play_track(index);

/* window.onload = function() {
	let button = document.getElementById('input_button_bg_change');
	let body = document.getElementsByTagName('body')[0];
	let colors = ['blue', 'grey', 'black', 'white', 'red', 'green', '#aaa', '#FFAACC', 'rgb(122,111,110)'];
	button.onclick = function() {
		 body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	};
}; */




/* let colorArray = ["#0DC2FF", "#007DE8", "#0E5DFF", "#0C28EB", "#1600FF"];
let i = 0;

function changeColor() {
	//  document.body.style.background = colorArray[i];
	document.body.style.backgroundImage = 'url(..img/1png.jpg)'; //Если файл в корне, если путь другой, укажите путь перед t.png
	i++;
	if (i >= colorArray.length) {
		i = 0;
	}
} */



/* document.addEventListener('DOMContentLoaded', function() {
	let body = document.body,
		 colors = ['#CC3300', '#FF6600', '#FFFF00', '#99FF33', '#66FFFF', '#00FFFF', '#6600FF'];
		 
	document.querySelector('#change-bg').addEventListener('click', function() {
	  let rand = Math.floor(Math.random() * colors.length);
	  body.style.backgroundColor = colors[rand];
	});
 }); */

