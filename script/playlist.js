let canciones = [
    "Thalia Arrasando.mp3" ,
    "Ana Gabriel Quien como tú.mp3" ,
    "Camila Aléjate De Mi.mp3" ,
    "Camila Bésame Audio.mp3" ,
    "Camila Coleccionista De Canciones.mp3" ,
    "Camila Mientes.mp3" ,
    "Chayanne Dejaría Todo.mp3" ,
    "Chayanne Provcame.mp3" ,
    "Chayanne Salomé.mp3" ,
    "Chayanne Torero.mp3" ,
    "Chayanne Un Siglo Sin Ti.mp3" ,
    "Coti Nada Fue Un Error.mp3" ,
    "Cristian Lloviendo Estrellas.mp3" ,
    "David Bisbal Ave María.mp3" ,
    "David Bisbal Buleria.mp3" ,
    "David Bisbal Esclavo De Sus Besos.mp3" ,
    "David Bisbal Herederos.mp3" ,
    "Diego Torres Guapa.mp3" ,
    "Elvis Crespo Suavemente.mp3" ,
    "Gloria Trevi Todos Me Miran.mp3" ,
    "Gustavo Cordera La Bomba Loca.mp3" ,
    "Juanes Me Enamora.mp3" ,
    "Juanes A Dios Le Pido.mp3" ,
    "Juanes ft Nelly Furtado Fotografía .mp3" ,
    "Juanes La Camisa Negra.mp3" ,
    "Juanes Mala Gente.mp3" ,
    "Julieta Venegas Algo Esta Cambiando.mp3" ,
    "Julieta Venegas Eres para Mí.mp3" ,
    "Julieta Venegas Lento.mp3" ,
    "Julieta Venegas Limon Y Sal.mp3" ,
    "Julieta Venegas Me Voy.mp3" ,
    "La isla del sol.mp3" ,
    "la oreja de van gogh deseos de cosas imposibles.mp3" ,
    "La Oreja de Van Gogh Rosas.mp3" ,
    "Luis Miguel Ahora te puedes marchar.mp3" ,
    "Luis Miguel Cuando Calienta el Sol.mp3" ,
    "Luis Miguel La Incondicional.mp3" ,
    "Luis Miguel Sabor A Mi.mp3" ,
    "Marco Antonio Solís Si No Te Hubieras Ido.mp3" ,
    "Original Meneaito El Meneaito.mp3" ,
    "Paulina Rubio Ni Una Sola Palabra.mp3" ,
    "Pimpinela olvidame y pega la vuelta.mp3" ,
    "Proyecto Uno El Tiburon.mp3" ,
    "Rafaella Carra Fiesta.mp3" ,
    "Ricardo Arjona Señora de las 4 decadas con letra.mp3" ,
    "Ricardo Arjona Dime Que No.mp3" ,
    "Ricardo Arjona El Amor.mp3" ,
    "Ricardo Arjona El problema.mp3" ,
    "Ricardo Arjona Fuiste tú feat Gaby Moreno.mp3" ,
    "Ricardo arjonaminutos con letra.mp3" ,
    "Ricky Martin Lo Mejor de Mi Vida Eres Tú.mp3" ,
    "Ricky Martin María.mp3" ,
    "Ricky Martin She Bangs.mp3" ,
    "Ricky Martin Tu Recuerdo.mp3" ,
    "Shakira Ciega Sordomuda.mp3" ,
    "Shakira Estoy Aquí.mp3" ,
    "Shakira Ojos Así.mp3",
   
]

var indiceActual = new Array(1)
//Funcion para crear mediante javascript el listado de canciones

function crearPlayList(){
    const listado = document.createElement('ol')
    listado.setAttribute("id", 'listadoMusica')
    for (let i = 0; i<canciones.length; i++){
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(canciones[i])) 
        item.setAttribute("id", canciones.indexOf(canciones[i]))
        listado.appendChild(item)
    }
    return listado
}

document.getElementById('playList').appendChild(crearPlayList())
 
var listadoMusica= document.getElementById('listadoMusica')
listadoMusica.onclick = (e) =>{
    const itemClick = e.target
    removeActive()
    itemClick.classList.add("active");
    reproduccionActual("Reproduciendo: "+ itemClick.innerText)
    loadMusic(itemClick.innerText)
    player.play()
    indiceActual[0]= e.target.id
    classIconPlay();
 
}
//Funcion para cambiar el icono del reprodutor
function classIconPlay(){
    var element = document.getElementById("iconPlay")
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
}
//Funcion para control del volumen
const volumen= document.getElementById("volumen")
volumen.oninput= (e) =>{
    const vol = e.target.value
    player.volume =vol
}
//Funcion para actualizar la barra de progreso del reprodutor
const updateProgress = () =>{
    if (player.currentTime >0){
        const barra = document.getElementById('progress')
        barra.value = (player.currentTime / player.duration) * 100
        
        var duracionSegundos= player.duration.toFixed(0);
        dura=secondsToString(duracionSegundos);
        var actualSegundos = player.currentTime.toFixed(0)
        actual=secondsToString(actualSegundos);
        
        duracion= actual +' / '+ dura
        document.getElementById('timer').innerText=duracion 
    }
    if (player.ended){
        nextMusic();//Reproducir la siguiente pista
    } 
}
//Funcion para reproducir la proxima cancion
function nextMusic(){  
    const source = document.getElementById('source');
    var musicaActual= Number(indiceActual[0]);
    if (canciones.length == (musicaActual+1)){
        var siguiente = 0
    } else {
        var siguiente = musicaActual + 1
    }
    removeActive()
    var item=document.getElementById(siguiente)
    item.classList.add("active");
    loadMusic(canciones[siguiente]);
    player.play()
    indiceActual[0]= siguiente
    reproduccionActual("Reproduciendo: "+ canciones[siguiente].replace(".mp3",""))
    classIconPlay()
}
//Funcion para reproducir la cancion anterior
function prevMusic(){  
    const source = document.getElementById('source');
    var musicaActual= Number(indiceActual[0]);
    if (musicaActual==0){
        var anterior= canciones.length - 1
    } else {
        var anterior = musicaActual - 1
    }
    removeActive()
    var item=document.getElementById(anterior)
    item.classList.add("active");
    loadMusic(canciones[anterior]);
    player.play()
    indiceActual[0]= anterior
    reproduccionActual("Reproduciendo: "+ canciones[anterior].replace(".mp3",""))
    classIconPlay()
}
//Funcion para remover todas las clases css activas
function removeActive(){
    var elems = document.querySelectorAll(".active");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active");
      });
      return elems
}
//Funcion para mostrar el nombre del arhivo actual en reproduccion
function reproduccionActual(texto){
    document.getElementById('currentPlay').innerText=texto
}
//Funcion para cargar las canciones en el reproductor
function loadMusic(ruta){
    var source = document.getElementById('source')
    var folder ="musica";//Carpeta donde tenemos almancenada la musica
    source.src= folder+"/"+ruta
    var index= indiceActual[0]= canciones.indexOf(ruta)
    removeActive()
    var item=document.getElementById(index)
    item.classList.add("active");
    reproduccionActual("Reproduciendo: "+ ruta.replace(".mp3",""))
    player.load()
}
//Funcion para pausar o darle play 
function togglePlay() {
    if (player.paused){
        toggleIcon();
        return player.play();
    } else {
        toggleIcon();
        return player.pause();
    }
}
//Funcion para cambiar el icono play o pause
function toggleIcon() {
   var element = document.getElementById("iconPlay");
   element.classList.toggle("fa-pause-circle");
   element.classList.toggle("fa-play-circle");
}
//Funcion para que al dar click sobre la barra de progeso se permita adelantar
progress.addEventListener('click', adelantar);
function adelantar(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
    sonsole.log(e);
}
//Funcion para convertir segundos a minutos y horas
function secondsToString(seconds) {
    var hour="";
    if (seconds>3600){
        hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        hour+=":"
    }
   var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour  + minute + ':' + second;
}
loadMusic(canciones[0])

   
let listadesple =document.querySelector("#desplegarLista")
let listadesplegable =document.querySelector("#lista")

listadesple.addEventListener("click",function () {
    listadesplegable.classList.toggle('despli')
})


let despleVolumen =document.querySelector("#despleVol")
let desplegableVolumen =document.querySelector("#este")

despleVolumen.addEventListener("click",function () {
    desplegableVolumen.classList.toggle('infoVol')
})


let titulo =document.querySelector("h3")
let  botonPrime =document.querySelector('#primero')
botonPrime.addEventListener("click",function () {
    canciones = []
    canciones.push( "Thalia Arrasando.mp3" ,
    "Ana Gabriel Quien como tú.mp3" ,
    "Camila Aléjate De Mi.mp3" ,
    "Camila Bésame Audio.mp3" ,
    "Camila Coleccionista De Canciones.mp3" ,
    "Camila Mientes.mp3" ,
    "Chayanne Dejaría Todo.mp3" ,
    "Chayanne Provcame.mp3" ,
    "Chayanne Salomé.mp3" ,
    "Chayanne Torero.mp3" ,
    "Chayanne Un Siglo Sin Ti.mp3" ,
    "Coti Nada Fue Un Error.mp3" ,
    "Cristian Lloviendo Estrellas.mp3" ,
    "David Bisbal Ave María.mp3" ,
    "David Bisbal Buleria.mp3" ,
    "David Bisbal Esclavo De Sus Besos.mp3" ,
    "David Bisbal Herederos.mp3" ,
    "Diego Torres Guapa.mp3" ,
    "Elvis Crespo Suavemente.mp3" ,
    "Gloria Trevi Todos Me Miran.mp3" ,
    "Gustavo Cordera La Bomba Loca.mp3" ,
    "Juanes Me Enamora.mp3" ,
    "Juanes A Dios Le Pido.mp3" ,
    "Juanes ft Nelly Furtado Fotografía .mp3" ,
    "Juanes La Camisa Negra.mp3" ,
    "Juanes Mala Gente.mp3" ,
    "Julieta Venegas Algo Esta Cambiando.mp3" ,
    "Julieta Venegas Eres para Mí.mp3" ,
    "Julieta Venegas Lento.mp3" ,
    "Julieta Venegas Limon Y Sal.mp3" ,
    "Julieta Venegas Me Voy.mp3" ,
    "La isla del sol.mp3" ,
    "la oreja de van gogh deseos de cosas imposibles.mp3" ,
    "La Oreja de Van Gogh Rosas.mp3" ,
    "Luis Miguel Ahora te puedes marchar.mp3" ,
    "Luis Miguel Cuando Calienta el Sol.mp3" ,
    "Luis Miguel La Incondicional.mp3" ,
    "Luis Miguel Sabor A Mi.mp3" ,
    "Marco Antonio Solís Si No Te Hubieras Ido.mp3" ,
    "Original Meneaito El Meneaito.mp3" ,
    "Paulina Rubio Ni Una Sola Palabra.mp3" ,
    "Pimpinela olvidame y pega la vuelta.mp3" ,
    "Proyecto Uno El Tiburon.mp3" ,
    "Rafaella Carra Fiesta.mp3" ,
    "Ricardo Arjona Señora de las 4 decadas con letra.mp3" ,
    "Ricardo Arjona Dime Que No.mp3" ,
    "Ricardo Arjona El Amor.mp3" ,
    "Ricardo Arjona El problema.mp3" ,
    "Ricardo Arjona Fuiste tú feat Gaby Moreno.mp3" ,
    "Ricardo arjonaminutos con letra.mp3" ,
    "Ricky Martin Lo Mejor de Mi Vida Eres Tú.mp3" ,
    "Ricky Martin María.mp3" ,
    "Ricky Martin She Bangs.mp3" ,
    "Ricky Martin Tu Recuerdo.mp3" ,
    "Shakira Ciega Sordomuda.mp3" ,
    "Shakira Estoy Aquí.mp3" ,
    "Shakira Ojos Así.mp3",);
    console.log(canciones);
    function listar(){
        const listado = document.createElement('ol')
        listado.setAttribute("id", 'listadoMusica')
        for (let i = 0; i<canciones.length; i++){
            const item = document.createElement('li')
            item.appendChild(document.createTextNode(canciones[i])) 
            item.setAttribute("id", canciones.indexOf(canciones[i]))
            listado.appendChild(item)
        }
        return listado
    }
    console.log(listar());
    listadoMusica.innerHTML=``
    listadoMusica.appendChild(listar())
    titulo.innerText="Señora de las cuatro decadas"
})
let  botonSecu =document.querySelector('#segundos')
botonSecu.addEventListener("click",function () {
    canciones =[];
    canciones.push(
    "Yo Perreo Sola Bad Bunny.mp3" ,
    "ALEXIO Tumba La Casa Remix ft Daddy Nicky Jam Arcangel Ñengo Flow Zion Farruko De la Ghetto.mp3" ,
    "Anuel AA Daddy Yankee Karol G Ozuna J Balvin China.mp3" ,
    "BAD BUNNY AMORFODA.mp3",
    "BAD BUNNY x DRAKE MÍA.mp3",
    "Becky G Bad Bunny Mayores.mp3" ,
    "Becky G Natti Natasha Sin Pijama.mp3" ,
    "Bhavi ft Ecko Piso Prod by Omar Varela.mp3" ,
    "Black Eyed Peas J Balvin RITMO Bad Boys For Life.mp3" ,
    "Daddy Yankee Dura.mp3" ,
    "Daddy Yankee Hula Hoop.mp3" ,
    "Daddy Yankee Shaky Shaky.mp3" ,
    "Daddy Yankee Snow Con Calma.mp3" ,
    "Danny Ocean Me Rehúso.mp3" ,
    "De La Calle Puti Short.mp3" ,
    "DJ Snake Taki Taki ft Selena Gomez Ozuna Cardi B.mp3" ,
    "DUKI Goteo.mp3" ,
    "Duki She Dont Give a FO ft Khea Prod by Omar Varela.mp3" ,
    "DUKI x KHEA HITBOY.mp3" ,
    "El Reja Soltero Hasta La Tumba.mp3" ,
    "EMUS DJ Y SU ANONYMOUS CUMBIERO DALE QUE SO VO.mp3" ,
    "J Balvin Willy William Mi Gente.mp3" ,
    "j mena La Cobra.mp3" ,
    "j mena La Tonta.mp3",
     "KAROL G Nicki Minaj Tusa.mp3" ,
    "Luis Fonsi Demi Lovato Échame La Culpa.mp3" ,
    "Maluma Borro Cassette.mp3" ,
    "Maluma Felices los 4.mp3" ,
    "Mambo Kingz Me Reclama ft Ozuna Luigi 21.mp3" ,
    "MARAMA Bronceado.mp3" ,
    "MARAMA Todo comenzo bailando.mp3" ,
    "MC Fioti Bum Bum Tam Tam KondZilla.mp3" ,
    "MC G15 Deu Onda KondZilla.mp3" ,
    "MC Kevinho Olha a Explosão KondZilla.mp3" ,
    "Miss Bolivia Tomate el Palo ft Leo García.mp3" ,
    "Mueve el Cucuta.mp3" ,
    "Muévelo Nicky Jam Daddy Yankee.mp3" ,
    "Natti Natasha Ozuna Criminal.mp3" ,
    "Ozuna Se Preparó Odisea.mp3" ,
    "Paulo Londra Condenado Para El Millon.mp3" ,
    "Paulo Londra Adan y Eva.mp3" ,
    "Paulo Londra ft Lenny Tavarez Nena Maldicion.mp3" ,
    "Plan B Candy.mp3",
    "Plan B Choca.mp3" ,
    "Ricky Martin Vente Pa Ca ft Maluma.mp3" ,
    "Rombai Cuando Se Pone A Bailar.mp3" ,
    "Rombai Ft Marama Noche Loca.mp3" ,
    "ROMBAI Locuras Contigo.mp3" ,
    "ROSALÍA Aute Cuture.mp3" ,
    "ROSALÍA J Balvin Con Altura ft El Guincho.mp3" ,
    "ROSALÍA Ozuna Yo x Ti Tu x Mi.mp3" ,
    "Safaera.mp3" ,
    "Shakira Chantaje Official Video ft Maluma.mp3" ,
    "Shakira Me Enamoré.mp3" ,
    "Te Bote Remix Casper Nio García Darell Nicky Jam Bad Bunny Ozuna.mp3" ,
    "Thalia Desde Esa Noche ft Maluma.mp3" ,
    "TINI Lalo Ebratt Fresa.mp3", )
    console.log(canciones);
    function listar(){
        const listado = document.createElement('ol')
        listado.setAttribute("id", 'listadoMusica')
        for (let i = 0; i<canciones.length; i++){
            const item = document.createElement('li')
            item.appendChild(document.createTextNode(canciones[i])) 
            item.setAttribute("id", canciones.indexOf(canciones[i]))
            listado.appendChild(item)
        }
        return listado
    }
    console.log(listar());
    listadoMusica.innerHTML=``
    listadoMusica.appendChild(listar())
    titulo.innerText="Noches Latinas de Pasión y Lujuria"
})

