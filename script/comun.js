let header = document.querySelector("header")

header.innerHTML=`

<a href="index.html" id="Home"><h1> Wonder Girls</h1> </a>

<div class="menu_bar">
    <a href="#" class="bt-menu"><span class="icon-list2"><i class="fas fa-bars"></i></span><h1> Wonder Girls</h1></a>
</div>

<nav id="menu">
    <ul>

        <button id="cerrar" class="cerrar">x</button>
        
        <a href="Issues.html"><li>Issue</li></a>

        <a href="Frases.html"><li> Frases</li></a> 

        <!-- Desplegable -->
        <li id="desple">Pelis
        <ul id="despegable">     
       <a href="PelisVistas.html"> <li id="desple1" >Pelis Vistas</li></a> 
        <a href="PelisParaVer.html"><li>Pelis Para Ver</li></a> 
        <a href="PelisNoltagicas.html"><li>Peliculas Nostalgicas</li> </a>
        </ul>
        </li>

       <a href=""> <li>Tesis</li></a>
           
       <a href="PowersPoint.html"><li>PowersPoints</li></a>

        <a href="Libros.html"><li>Libros</li> </a>

    </ul>
</nav>

`

$(document).ready(function () {

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('header').addClass('header2')
        }else{
            $('header').removeClass('header2')
        }
    })
})



$(document).ready(function(){

	$('.Subir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.Subir').slideDown(300);
		} else {
			$('.Subir').slideUp(300);
		}
	});

});


$(document).ready(maine);

var contador = 1;

function maine(){
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

var contadore = 1;
function maindos(){
	$('#cerrar').click(function(){
		// $('nav').toggle(); 

		if(contadore == 1){
			$('nav').animate({
				right: '-100%'
			});
			contadore = 0;
		} else {
			contadore = 1;
			$('nav').animate({
				right: '0',
			});
		}
	});
};


let desple =document.querySelector("#desple")
let desplegable =document.querySelector("#despegable")

desple.addEventListener("click",function () {
	desplegable.classList.toggle('despegable')
})
desple.addEventListener('mouseleave',function () {
	desplegable.classList.remove('despegable')
})