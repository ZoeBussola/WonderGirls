let canciones = [
    "Señora/Un siglo sin ti - Chayanne.mp3",
     "Señora/A Dios Le Pido - Juanes.mp3",
     "Señora/Ahora te puedes marchar - Luis Miguel.mp3",
     "Señora/Aléjate De Mi - Camila.mp3",
     "Señora/Algo Esta Cambiando - Julieta Venegas.mp3",
     "Señora/Arrasando - Thalia.mp3",
     "Señora/Ave María - David Bisbal_.mp3",
     "Señora/Bésame - Camila.mp3" ,
     "Señora/Buleria - David Bisbal.mp3" ,
     "Señora/Ciega Sordomuda - Shakira.mp3" ,
     "Señora/Coleccionista De Canciones - Camila.mp3" ,
     "Señora/Cuando Calienta el Sol - Luis Miguel.mp3" ,
     "Señora/Deseos de cosas imposibles - La oreja de Van Gogh.mp3" ,
     "Señora/Dime Que No Video - Ricardo Arjona.mp3" ,
     "Señora/El Amor - Ricardo Arjona.mp3" ,
     "Señora/El Meneaito - Original.mp3" ,
     "Señora/El problema - Ricardo Arjona.mp3" ,
     "Señora/El Tiburón - Proyecto Uno.mp3" ,
     "Señora/Eres para Mí Video - Julieta Venegas.mp3" ,
     "Señora/Esclavo de sus besos - David Bisbal.mp3" ,
     "Señora/Estoy Aquí - Shakira.mp3" ,
     "Señora/Fiesta - Raffaella Carrá.mp3" ,
     "Señora/Fotografía - Juanes.mp3" ,
     "Señora/Fuiste tú - Ricardo Arjona.mp3" ,
     "Señora/Guapa - Diego Torres.mp3" ,
     "Señora/Herederos - David Bisbal.mp3" ,
     "Señora/La Bomba Loca - Gustavo Cordera.mp3" ,
     "Señora/La Camisa Negra - Juanes.mp3" ,
     "Señora/La Incondicional - Luis Miguel.mp3" ,
     "Señora/La isla del sol - El Simbolo.mp3" ,
     "Señora/Lento - Julieta Venegas.mp3" ,
     "Señora/Limón Y Sal - Julieta Venegas.mp3" ,
     "Señora/Lloviendo estrellas - Cristian Castro.mp3",
     "Señora/Lo dejaría todo - Chayanne.mp3" ,
     "Señora/Lo Mejor de Mi Vida Eres Tú - Ricky Martin.mp3" ,
     "Señora/Mala Gente - Juanes.mp3" ,
     "Señora/María - Ricky Martin.mp3" ,
     "Señora/Me Enamora - Juanes.mp3" ,
     "Señora/Me Voy - Julieta Venegas.mp3" ,
     "Señora/Mientes - Camila.mp3" ,
     "Señora/Minutos - Ricardo Arjona.mp3" ,
     "Señora/Nada fue un error - Coti.mp3" ,
     "Señora/Ni Una Sola Palabra - Paulina Rubio.mp3" ,
     "Señora/Ojos Así - Shakira.mp3" ,
     "Señora/Olvidame y pega la vuelta - Pimpinela.mp3" ,
     "Señora/Provocame - Chayanne.mp3" ,
     "Señora/Quien como tú - Ana Gabriel.mp3" ,
     "Señora/Rosas - La oreja de Van Gogh.mp3" ,
     "Señora/Sabor A Mi - Luis Miguel.mp3" ,
     "Señora/Salomé - Chayanne.mp3" ,
     "Señora/Señora de las 4 décadas - Ricardo Arjona.mp3" ,
     "Señora/She Bangs - Ricky Martin.mp3" ,
     "Señora/Si No Te Hubieras Ido - Marco Antonio Solís.mp3" ,
     "Señora/Suavemente - Elvis Crespo.mp3" ,
     "Señora/Todos me miran - Gloria Trevi.mp3" ,
     "Señora/Torero - Chayanne.mp3" ,
     "Señora/Tu Recuerdo - Ricky Martin.mp3" ,
    
   ]
   
   var indiceActual = new Array(1)
   //Funcion para crear mediante javascript el listado de canciones
   
   function crearPlayList(){
     const listado = document.createElement('ol')
     listado.setAttribute("id", 'listadoMusica')
     for (let i = 0; i<canciones.length; i++){
         const item = document.createElement('li')
         const span =document.createElement('span')
   
         span.appendChild(document.createTextNode(canciones[i])) 
         item.appendChild(document.createTextNode(((canciones[i]).slice(7,100).replace(".mp3","")))) 
   
         item.appendChild(span)
         item.setAttribute("id", canciones.indexOf(canciones[i]))
         span.setAttribute("id", canciones.indexOf(canciones[i]))
   
         listado.appendChild(item)
     }
     return listado
    
   }
   
   document.getElementById('playList').appendChild(crearPlayList())
   
   var listadoMusica= document.getElementById('listadoMusica')
   listadoMusica.onclick = (e) =>{
     const itemClick = e.target
     removeActive() 
     console.log(itemClick.querySelector('span').innerText);
     itemClick.classList.add("active");
     reproduccionActual(itemClick.querySelector('span').innerText)
     loadMusic(itemClick.querySelector('span').innerText)
     player.play()
     indiceActual[0]= e.target.id
     classIconPlay();
   
   }
   //Funcion para cambiar el icono del reprodutor
   function classIconPlay(){
     var element = document.getElementById("iconPlay")
     element.classList.remove("fa-pause");
     element.classList.add("fa-play");
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
         document.getElementById('timer').innerText=actual 
         document.getElementById('timer2').innerText=dura 
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
     reproduccionActual(((canciones[siguiente].replace(/.-/g, '\n')).replace(".mp3","")).slice(7,100))
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
     reproduccionActual(((canciones[anterior].replace(/.-/g, '\n')).replace(".mp3","")).slice(7,100))
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
     var folder ="/musica";//Carpeta donde tenemos almancenada la musica
     source.src= folder+"/"+ruta
     var index= indiceActual[0]= canciones.indexOf(ruta)
     removeActive()
     var item=document.getElementById(index)
     item.classList.add("active");
     reproduccionActual(((ruta.replace(/.-/g, '\n')).replace(".mp3","")).slice(7,100))
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
    element.classList.toggle("fa-pause");
    element.classList.toggle("fa-play");
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
   
   let imgportada=document.querySelector(".portada")
   console.log(imgportada);
   let titulo =document.querySelector("h3")
   let  botonPrime =document.querySelector('#primero')
   botonPrime.addEventListener("click",function () {
     canciones = []
     canciones.push(  "Señora/Un siglo sin ti - Chayanne.mp3",
     "Señora/A Dios Le Pido - Juanes.mp3",
     "Señora/Ahora te puedes marchar - Luis Miguel.mp3",
     "Señora/Aléjate De Mi - Camila.mp3",
     "Señora/Algo Esta Cambiando - Julieta Venegas.mp3",
     "Señora/Arrasando - Thalia.mp3",
     "Señora/Ave María - David Bisbal_.mp3",
     "Señora/Bésame - Camila.mp3" ,
     "Señora/Buleria - David Bisbal.mp3" ,
     "Señora/Ciega Sordomuda - Shakira.mp3" ,
     "Señora/Coleccionista De Canciones - Camila.mp3" ,
     "Señora/Cuando Calienta el Sol - Luis Miguel.mp3" ,
     "Señora/Deseos de cosas imposibles - La oreja de Van Gogh.mp3" ,
     "Señora/Dime Que No Video - Ricardo Arjona.mp3" ,
     "Señora/El Amor - Ricardo Arjona.mp3" ,
     "Señora/El Meneaito - Original.mp3" ,
     "Señora/El problema - Ricardo Arjona.mp3" ,
     "Señora/El Tiburón - Proyecto Uno.mp3" ,
     "Señora/Eres para Mí Video - Julieta Venegas.mp3" ,
     "Señora/Esclavo de sus besos - David Bisbal.mp3" ,
     "Señora/Estoy Aquí - Shakira.mp3" ,
     "Señora/Fiesta - Raffaella Carrá.mp3" ,
     "Señora/Fotografía - Juanes.mp3" ,
     "Señora/Fuiste tú - Ricardo Arjona.mp3" ,
     "Señora/Guapa - Diego Torres.mp3" ,
     "Señora/Herederos - David Bisbal.mp3" ,
     "Señora/La Bomba Loca - Gustavo Cordera.mp3" ,
     "Señora/La Camisa Negra - Juanes.mp3" ,
     "Señora/La Incondicional - Luis Miguel.mp3" ,
     "Señora/La isla del sol - El Simbolo.mp3" ,
     "Señora/Lento - Julieta Venegas.mp3" ,
     "Señora/Limón Y Sal - Julieta Venegas.mp3" ,
     "Señora/Lloviendo estrellas - Cristian Castro.mp3",
     "Señora/Lo dejaría todo - Chayanne.mp3" ,
     "Señora/Lo Mejor de Mi Vida Eres Tú - Ricky Martin.mp3" ,
     "Señora/Mala Gente - Juanes.mp3" ,
     "Señora/María - Ricky Martin.mp3" ,
     "Señora/Me Enamora - Juanes.mp3" ,
     "Señora/Me Voy - Julieta Venegas.mp3" ,
     "Señora/Mientes - Camila.mp3" ,
     "Señora/Minutos - Ricardo Arjona.mp3" ,
     "Señora/Nada fue un error - Coti.mp3" ,
     "Señora/Ni Una Sola Palabra - Paulina Rubio.mp3" ,
     "Señora/Ojos Así - Shakira.mp3" ,
     "Señora/Olvidame y pega la vuelta - Pimpinela.mp3" ,
     "Señora/Provocame - Chayanne.mp3" ,
     "Señora/Quien como tú - Ana Gabriel.mp3" ,
     "Señora/Rosas - La oreja de Van Gogh.mp3" ,
     "Señora/Sabor A Mi - Luis Miguel.mp3" ,
     "Señora/Salomé - Chayanne.mp3" ,
     "Señora/Señora de las 4 décadas - Ricardo Arjona.mp3" ,
     "Señora/She Bangs - Ricky Martin.mp3" ,
     "Señora/Si No Te Hubieras Ido - Marco Antonio Solís.mp3" ,
     "Señora/Suavemente - Elvis Crespo.mp3" ,
     "Señora/Todos me miran - Gloria Trevi.mp3" ,
     "Señora/Torero - Chayanne.mp3" ,
     "Señora/Tu Recuerdo - Ricky Martin.mp3" ,);
     function listar(){
       const listado = document.createElement('ol')
     listado.setAttribute("id", 'listadoMusica')
     for (let i = 0; i<canciones.length; i++){
         const item = document.createElement('li')
         const span =document.createElement('span')
   
         span.appendChild(document.createTextNode(canciones[i])) 
         item.appendChild(document.createTextNode(((canciones[i]).slice(7,100).replace(".mp3","")))) 
   
         item.appendChild(span)
         item.setAttribute("id", canciones.indexOf(canciones[i]))
         span.setAttribute("id", canciones.indexOf(canciones[i]))
   
         listado.appendChild(item)
     }
     return listado
     }
    imgportada.setAttribute("src","https://pbs.twimg.com/media/DXf9w_vWsAEduM1.jpg")
     botonPrime.classList.toggle("selecionado")
     botonSecu.classList.remove("selecionado")
     listadoMusica.innerHTML=``
     listadoMusica.appendChild(listar())
     titulo.innerText="Señora de las cuatro decadas"
   })
   let  botonSecu =document.querySelector('#segundos')
   botonSecu.addEventListener("click",function () {
     canciones =[];
     canciones.push(
       "Noches/Yo x Ti Tu x Mi - Rosalía ft Ozuna.mp3" ,
       "Noches/Adan y Eva - Paulo Londra.mp3" ,
       "Noches/AMORFODA - Bad Bunny.mp3" ,
       "Noches/Aute Cuture - Rosalía.mp3" ,
       "Noches/Borro Cassette - Maluma.mp3" ,
       "Noches/Bronceado - Marama.mp3" ,
       "Noches/Bum Bum Tam Tam - MC Fioti.mp3" ,
       "Noches/Candy - Plan B.mp3" ,
       "Noches/Chantaje - Shakira ft Maluma.mp3" ,
       "Noches/China - Anuel AA_.mp3" ,
       "Noches/Choca - Plan B.mp3" ,
       "Noches/Con Altura - Rosalía ft J Balvin.mp3" ,
       "Noches/Con Calma - Daddy Yankee.mp3" ,
       "Noches/Condenado Para El Millon - Paulo Londra.mp3" ,
       "Noches/Criminal Official Video - Natti Natasha ft Ozuna_.mp3" ,
       "Noches/Cuando Se Pone A Bailar - Rombai.mp3" ,
       "Noches/DALE QUE SO VO - Emus Dj.mp3" ,
       "Noches/Desde Esa Noche - Thalia.mp3" ,
       "Noches/Deu Onda - MC G15.mp3" ,
       "Noches/Dura - Daddy Yankee.mp3" ,
       "Noches/Échame La Culpa Video - Luis Fonsi ft Demi Lovato.mp3" ,
       "Noches/Felices los 4 - Maluma.mp3" ,
       "Noches/Fresa - TINI  ft Lalo Ebratt_.mp3" ,
       "Noches/Goteo - Duki.mp3" ,
       "Noches/HITBOY - Duki x Khea.mp3" ,
       "Noches/Hula Hoop - Daddy Yankee.mp3" ,
       "Noches/La Cobra - J mena.mp3" ,
       "Noches/La Tonta - J mena_.mp3" ,
       "Noches/Locuras Contigo - Rombai.mp3" ,
       "Noches/Mayores - Becky G.mp3" ,
       "Noches/Me Enamoré - Shakira.mp3" ,
       "Noches/Me Reclama - Mambo Kingz ft Ozuna Luigi 21 Plus.mp3" ,
       "Noches/Me Rehúso - Danny Ocean.mp3" ,
       "Noches/Mi Gente - J Balvin.mp3" ,
       "Noches/MÍA - Bad Bunny x Drake.mp3" ,
       "Noches/Mueve el Cucuta - El Apache Ness.mp3" ,
       "Noches/Muévelo - Nicky Jam ft Daddy Yankee.mp3" ,
       "Noches/Nena Maldición - Paulo Londra ft Lenny Tavarez.mp3" ,
       "Noches/Noche Loca - Rombai Ft Marama.mp3" ,
       "Noches/Olha a Explosão - MC Kevinho.mp3" ,
       "Noches/Piso - Bhavi ft Ecko_.mp3" ,
       "Noches/Puti Short - De la Calle.mp3" ,
       "Noches/RITMO - Black Eyed Peas J Balvin.mp3" ,
       "Noches/Safaera - Bad Bunny.mp3" ,
       "Noches/Se Preparó - Ozuna.mp3" ,
       "Noches/Shaky Shaky - Daddy Yankee.mp3" ,
       "Noches/She Dont Give a FO - Duki ft Khea.mp3" ,
       "Noches/Sin Pijama - Becky G.mp3" ,
       "Noches/Soltero Hasta La Tumba - El Reja.mp3" ,
       "Noches/Taki Taki - Dj Snake ft Selena Gomez Ozuna Cardi B.mp3" ,
       "Noches/Te Bote - Casper Nio García Darell Nicky Jam Bad Bunny Ozuna.mp3" ,
       "Noches/Todo comenzó bailando - Marama.mp3" ,
       "Noches/Tomate el Palo - Miss Bolivia.mp3" ,
       "Noches/Tumba La Casa - Alexio.mp3" ,
       "Noches/Tusa - Carol G ft Nicki Minaj.mp3" ,
       "Noches/Vente Pa Ca - Ricky Martin.mp3" ,
       "Noches/Yo Perreo Sola - Bad Bunny.mp3" , )
     function listar(){
       const listado = document.createElement('ol')
       listado.setAttribute("id", 'listadoMusica')
       for (let i = 0; i<canciones.length; i++){
           const item = document.createElement('li')
           const span =document.createElement('span')
     
           span.appendChild(document.createTextNode(canciones[i])) 
           item.appendChild(document.createTextNode(((canciones[i]).slice(7,100).replace(".mp3","")))) 
     
           item.appendChild(span)
           item.setAttribute("id", canciones.indexOf(canciones[i]))
           span.setAttribute("id", canciones.indexOf(canciones[i]))
     
           listado.appendChild(item)
       }
       return listado
     }
     imgportada.setAttribute("src","https://asset1.zankyou.com/images/mag-card-c/4ce/3eb5/878/623/-/es/wp-content/uploads/2017/04/shutterstock_3513804801.jpg")
     botonPrime.classList.remove("selecionado")
     botonSecu.classList.add("selecionado")
     listadoMusica.innerHTML=``
     listadoMusica.appendChild(listar())
     titulo.innerText="Noches Latinas de Pasión y Lujuria"
   })
   
   
   
   
   
   
   
   
    let btnDesPlay=document.querySelector("#btnOcultPlay")
   
    $(document).ready(desp);
   
   var contadorr = 1;
   
   function desp(){
       $('#btnOcultPlay').click(function(){
           if(contadorr == 1){
         btnDesPlay.style.display="none";
               $('.contentPlaylist').animate({
                   right: '0'
               });
               contador = 0;
           } else {
               contadorr = 1;
          btnDesPlay.style.display="block";
               $('.contentPlaylist').animate({
                   right: '-50vw'
               });
           }
   
       });
   };
   
   
   $(document).ready(despDos);
   
   var contadorrs = 1;
   function despDos(){
       $('#flechasCerrar').click(function(){
   
           if(contadorrs == 1){
          btnDesPlay.style.display="block";
               $('.contentPlaylist').animate({
                   right: '-50vw'
               });
               contadorrs = 1;
           } else {
               contadorrs = 1;
         btnDesPlay.style.display="none";
               $('.contentPlaylist').animate({
                   right: '0',
               });
           }
       });
   };
   
   let despleVolumen =document.querySelector("#despleVol")
   let cajaVolumen =document.querySelector(".volumen")
   let desplegableVolumen =document.querySelector("#este")
   
   despleVolumen.addEventListener("click",function () {
     desplegableVolumen.classList.toggle('infoVol')
     cajaVolumen.classList.toggle("cambioVol")
     despleVolumen.classList.toggle("cambioVol")
   })
   