const API_KEY = "d0cee2b7684e9a44b2e699db5c1d7d51";
const BASE = "https://api.themoviedb.org/3/";
const BASEIMG = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
const APIDEOMSB ="http://www.omdbapi.com/?i=tt3896198&apikey=9868098f" 
const PORGENRO= 'discover/movie?with_genres='//al final numero


let main= document.querySelector('main')

let botonPo = document.querySelector(".RandomPO")
let secionPO = document.querySelector(".populares")

let secionChicos = document.querySelector(".chicos")
let botonChicos = document.querySelector(".RandomChicos")

let secionFantasia = document.querySelector(".fantasia")
let botonFantasia = document.querySelector(".RandomFantasia")

let secionRomance = document.querySelector(".Romance")
let botonRomance = document.querySelector(".RandomRomance")

let id =0;

fetch(`${BASE}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
.then(function(response) {
	return response.json()
})
.then(({results}) => {
	botonPo.addEventListener("click",function () {
		console.log(results);
		id=1;
		let numeroRan = Math.round(Math.random() * (19 - 0) )
		let numeroG = results[numeroRan].genre_ids
		let generos=[];
		numeroG.forEach(genero => {
			
			switch (genero) {
				case 16:
				generos.push('Animacion')
				break;
		
				case 28:
				generos.push('Accion')
				break;
					
				case 12:
				generos.push('Aventura')
				break;
					
					case 10752:
				generos.push('Belica')
					break;
					
					case 878:
				generos.push('Ciencia Ficción')
					break;
					
					case 35:
				generos.push('Comedia')
					break;
					
					case 80 :
				generos.push('Crimen')
					break;
					
					case 99:
				generos.push('Documental')
					break;
					
					case 18:
				generos.push('Drama')
					break;
					
					case 10751:
				generos.push('Familia')
					break;
					
					case 14:
				generos.push('Fantasia')
					break;
					
					case 36:
				generos.push('Historia')
					break;
					
					case 9648:
				generos.push('Misterio')
					break;
					
					case 10402:
				generos.push('Musica')
					break;
					
					case 10770:
				generos.push('Peliculas de TV')
					break;
					
					case 10749:
				generos.push('Romance')
					break;
					
					case 53:
				generos.push('Suspenso')
					break;
					
					case 27:
				generos.push('Terror')
					break;
					
					case 37:
				generos.push('Western')
					break;
			default:
				generos.push('No hay Generos')
				break;
		}
		});
		
		secionPO.innerHTML=`
		 <img src="${BASEIMG}${results[numeroRan].poster_path}" alt="">
		 <div class="info">
		<h3>${results[numeroRan].title}</h3>
		<p class="descripcion">${results[numeroRan].overview}</p>
		</div>
		<div class="masInfo">
		<div class="puntuacion"><span>${results[numeroRan].vote_average}%</span></div>
		<div class="generos uno">
		  </div>
		</div> 
		<span class="posicion">${numeroRan + 1 }/20</span>
			`
		generos.forEach(genero=>{
			let cajaGene= document.querySelector(".uno")
				cajaGene.innerHTML+=`
			<span><i class="fas fa-circle"></i>${genero}</span>
			`
		})
	})
	})


fetch(`${BASE}discover/movie?with_genres=14&api_key=${API_KEY}`)
.then(function(response) {
	return response.json()
})
.then(({results}) => {
	

	botonFantasia.addEventListener("click",function () {

	let numeroRan = Math.round(Math.random() * (20 - 1) + 1)
		id = 2
	let numeroG = results[numeroRan].genre_ids
	let generos=[];
	numeroG.forEach(genero => {
		switch (genero) {
			case 16:
			generos.push('Animacion')
			break;
	
			case 28:
			generos.push('Accion')
			break;
				
			case 12:
			generos.push('Aventura')
			break;
				
				case 10752:
			generos.push('Belica')
				break;
				
				case 878:
			generos.push('Ciencia Ficción')
				break;
				
				case 35:
			generos.push('Comedia')
				break;
				
				case 80 :
			generos.push('Crimen')
				break;
				
				case 99:
			generos.push('Documental')
				break;
				
				case 18:
			generos.push('Drama')
				break;
				
				case 10751:
			generos.push('Familia')
				break;
				
				case 14:
			generos.push('Fantasia')
				break;
				
				case 36:
			generos.push('Historia')
				break;
				
				case 9648:
			generos.push('Misterio')
				break;
				
				case 10402:
			generos.push('Musica')
				break;
				
				case 10770:
			generos.push('Peliculas de TV')
				break;
				
				case 10749:
			generos.push('Romance')
				break;
				
				case 53:
			generos.push('Suspenso')
				break;
				
				case 27:
			generos.push('Terror')
				break;
				
				case 37:
			generos.push('Western')
				break;
		default:
			generos.push('No hay Generos')
			break;
	}});
	
		secionFantasia.innerHTML=`
     <img src="${BASEIMG}${results[numeroRan].poster_path}" alt="">
	 <div class="info">
    <h3>${results[numeroRan].title}</h3>
	<p class="descripcion">${results[numeroRan].overview}</p>
	</div>
	<div class="masInfo">
	<div class="puntuacion"><span>${results[numeroRan].vote_average}%</span></div>
	<div class="generos dos">
		  </div>
		</div>
		<span class="posicion">${numeroRan + 1 }/20</span>
			`
			generos.forEach(genero=>{
				let cajaGene= document.querySelector(".dos")
					cajaGene.innerHTML+=`
				<span><i class="fas fa-circle"></i>${genero}</span>
				`
		})
	
})
})



fetch(`${BASE}discover/movie?with_genres=10749&api_key=${API_KEY}`)
.then(function(response) {
	return response.json()
})
.then(({results}) => {
	

	botonRomance.addEventListener("click",function () {
		
	let numeroRan = Math.round(Math.random() * (20 - 1) + 1)
		id = 3
	let numeroG = results[numeroRan].genre_ids
	let generos=[];
	numeroG.forEach(genero => {
		switch (genero) {
			case 16:
			generos.push('Animacion')
			break;
	
			case 28:
			generos.push('Accion')
			break;
				
			case 12:
			generos.push('Aventura')
			break;
				
				case 10752:
			generos.push('Belica')
				break;
				
				case 878:
			generos.push('Ciencia Ficción')
				break;
				
				case 35:
			generos.push('Comedia')
				break;
				
				case 80 :
			generos.push('Crimen')
				break;
				
				case 99:
			generos.push('Documental')
				break;
				
				case 18:
			generos.push('Drama')
				break;
				
				case 10751:
			generos.push('Familia')
				break;
				
				case 14:
			generos.push('Fantasia')
				break;
				
				case 36:
			generos.push('Historia')
				break;
				
				case 9648:
			generos.push('Misterio')
				break;
				
				case 10402:
			generos.push('Musica')
				break;
				
				case 10770:
			generos.push('Peliculas de TV')
				break;
				
				case 10749:
			generos.push('Romance')
				break;
				
				case 53:
			generos.push('Suspenso')
				break;
				
				case 27:
			generos.push('Terror')
				break;
				
				case 37:
			generos.push('Western')
				break;
		default:
			generos.push('No hay Generos')
			break;
	}});
	
	secionRomance.innerHTML=`
     <img src="${BASEIMG}${results[numeroRan].poster_path}" alt="">
	 <div class="info">
    <h3>${results[numeroRan].title}</h3>
	<p class="descripcion">${results[numeroRan].overview}</p>
	</div>
	<div class="masInfo">
	<div class="puntuacion"><span>${results[numeroRan].vote_average}%</span></div>
	<div class="generos tres">
		  </div>
		</div>
		<span class="posicion">${numeroRan + 1 }/20</span>
			`
			generos.forEach(genero=>{
				let cajaGene= document.querySelector(".tres")
					cajaGene.innerHTML+=`
				<span><i class="fas fa-circle"></i>${genero}</span>
				`
		})
	
})
})

