$(document).ready(main,maindos);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				right: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				right: '-100%'
			});
		}

	});
    

};

$(document).ready(maindos);

var contador = 1;
let header=document.querySelector('header')
function maindos(){
	$('#cerrar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				right: '-100%'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				right: '0',
			});
		}

	});
    

};