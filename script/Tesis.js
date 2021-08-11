const tesise=[
    {
        titulo:'Dolly Parton Multiverse',
        sbtitulo:"Los principios del DPM",
        img:'img/diseñoMiru/Recurso 5.png',
       descripcion:"Las películas y series en las que aparece la artista presentan características que demuestran una relación entre ellas y Dolly parece estar vinculada con esto.Para comenzar esta tesis completamente profesional y para nada realizada como forma de entretenimiento, se podría comenzar introduciendo a la protagonista de la tesis:Dolly Rebecca Parton es una cantante, compositora y actriz estadounidense nacida el 19 de enero de 1946 en Sevier County, Tennessee, quien en la década de los 70 se convirtió en la referente principal del género musical Country gracias a canciones como Here You Come Again, Jolene y I Will Always Love You las cuales causaron un gran impacto en la cultura musical a nivel internacional.En el ámbito de la actuación tampoco se quedó atrás. Dolly hizo su debut cinematográfico con, 9 to 5 (Cómo eliminar a su jefe, de Colin Higgins, 1980), comedia con Lily Tomlin y Jane Fonda, para la que escribió la canción que da nombre a la película. Actuó en La casa más divertida de Texas (1982, Colin Higgins) y Magnolias de acero (1989, Herbert Ross). Ganó dos premios Grammy a la mejor vocalista country (1978, 1981) y a la mejor actuación vocal con un grupo (1987). Fue autora del tema 'I will always love you' de la banda sonora de 'Bodyguard'. En 1987 graba Trio, con Emmylou Harris y Linda Ronstadt.En el 2000 regresa al cine con Solid Gold Cadillac, donde también ejerce como productora.También participó en la serie infantil de Hannah Montana como la tía de la misma.En 2018, Parton anunció una serie de Netflix sobre su carrera musical. Fue su productora ejecutiva y coprotagonista. La serie, titulada Dolly Parton's Heartstrings, se emitió en noviembre de 2019.Para agregar más información vamos a citar a la página de internet por la cual se sacó la mayor cantidad de información acá presentada (no, no es Wikipedia somos mejores que eso), “ Compositora de más de 3000 canciones, Dolly Parton consiguió que 25 de sus canciones que alcanzan el número 1 en las listas de country Billboard; ganadora de nueve premios Grammy, con dos nominaciones a los premios Oscar, diez premios de la Asociación de Música Country, siete Premios de la Academia de Música Country, tres Premios de la Música Americana, y una de las siete artistas femeninas en ganar el Premio al Artista del Año de la Asociación de Música Country. Su nombre se halla en el Salón de la Fama de Compositores de Nashville y el Salón de la Fama de los Compositores. Vendió más de 100 millones de álbumes.”Esta gran artista se ganó el respeto y el amor del público no solo por sus éxitos sino también por sus caídas como cuando participó en un concurso de Drag, vistiéndose como Dolly Parton y perdió.Ahora a lo que nos compete en esta ocasión. A lo largo de su vida Dolly participó en variados shows y películas los cuales consideramos que presentan relaciones entre sí, basadas en la aparición de Dolly como personaje en cada una de ellas. La cantante se representa a sí misma en la mayoría de las películas en las cuales participó o fue nombrada lo cual nos lleva a tomar conclusiones. Además todas las filmografías tienen la particularidad de estar basadas en su discografía lo cual demuestra que su personaje es ella en la vida real.La películas y serie tomadas como referencia para este análisis son “Dumplin”, “Hannah Montana” y “Dolly Parton's Heartstrings”. Todas resultan mencionar o demostrar a Dolly como ella misma, un icono del género Country incluso también es considerada como un ente omnipotente musical.En la película “Dumplin”, sin formar parte del cast o siquiera trabajar en el, es mencionada como un referente de la música a la cual se la toma como una diosa mostrando diversas fotos de ella a lo largo de la película, y la banda sonora se basa en su discografía.",
       idea:"Valentina Ferraro, Zoe Bussola, Miranda Rodriguez",
        Autora:"Valentina Ferraro",
        Edicion:"Zoe Bussola, Miranda Rodriguez",
        fechaDeEmision:"12/08/2021",
        ultimaEdicion:"13/04/2022",
        id:1,
    },
    {
        titulo:'Los 4 unicos compositores',
        sbtitulo:"",
        img:'https://direct.rhapsody.com/imageserver/images/Art.41457/356x237.jpg',
        descripcion:'Espero ideas...',
        idea:"Valentina Ferraro, Zoe Bussola, Miranda Rodriguez",
        Autora:"Valentina Ferraro",
        Edicion:"Zoe Bussola, Miranda Rodriguez",
        fechaDeEmision:"12/08/2021",
        ultimaEdicion:"13/04/2022",
        id:2,
    },
    {
        titulo:'Bob Marley es jesus',
        sbtitulo:"",
        img:'https://data.whicdn.com/images/73873859/original.jpg',
        descripcion:'Espero ideas...',
        idea:"Valentina Ferraro, Zoe Bussola, Miranda Rodriguez",
        Autora:"Valentina Ferraro",
        Edicion:"Zoe Bussola, Miranda Rodriguez",
        fechaDeEmision:"12/08/2021",
        ultimaEdicion:"13/04/2022",
        id:3,
    },
    {
        titulo:'Jesus: El nacimiento de un influencer',
        sbtitulo:"",
        img:'https://img.memecdn.com/jesus-christ-that-is-the-most-holy-selfie-ever-taken_fb_3034213.jpg',
        descripcion:'Espero ideas...',
        idea:"Valentina Ferraro, Zoe Bussola, Miranda Rodriguez",
        Autora:"Valentina Ferraro, Zoe Bussola, Miranda Rodriguez",
        Edicion:"Valentina Ferraro, Zoe Bussola, Miranda Rodriguez",
        fechaDeEmision:"12/08/2021",
        ultimaEdicion:"13/04/2022",
        id:4,
    },

]

 let cajaCarpetas=document.querySelector(".cajaCarpetas");

  tesise.forEach(tesis=>{
      cajaCarpetas.innerHTML +=`
      <div class="carpetaGeneral" id="${tesis.id}">
      <img src="img/diseñoMiru/CarpetaTeoria.png"  class="carpeta" alt="">
      <span class="nombres">${tesis.titulo}</span>
  </div>
                  `
  })

 let carpetas=document.querySelectorAll(".carpetaGeneral")
let main =document.querySelector("main")

 carpetas.forEach(carpeta=>{
     console.log(carpeta);
     carpeta.addEventListener("click",function () {
      switch (carpeta.id) {
          case "1":
              main.innerHTML=``
            body.classList.toggle("clasebody")
            main.innerHTML=` <div class="tesis">
        <img src="img/diseñosmiru/Fondo resized.png" class="tesisFondo" alt="">
        <section class="contenido">
            <img src="${tesise[0].img}" class="Foto" alt="">
            <div class="pequenaInfo">
                <span>${tesise[0].titulo}</span>
                <span>Idea:${tesise[0].idea}</span>
                <span>Autora:${tesise[0].Autora}</span>
                <span>Edicion:${tesise[0].Edicion}</span>
                <span>Fecha De Emision:${tesise[0].fechaDeEmision}</span>
                <span>Ultima Edicion:${tesise[0].ultimaEdicion}</span>
            </div>
        </section>
        <section class="infoGrande">
        <div class="contenido">
                <h2>${tesise[0].titulo}</h2>
                <h3>${tesise[0].sbtitulo}</h3>
                <p class="descrip">${tesise[0].descripcion}</p>
                </div>
                <a class="flecha" href="Tesis.html"><i class="fas fa-arrow-circle-left"></i></a>
    </section>
    </div>
            
            `
              break;
        case "2":
            main.innerHTML=``
            body.classList.toggle("clasebody")
            main.innerHTML=` <div class="tesis">
        <img src="img/diseñosmiru/Fondo resized.png" class="tesisFondo" alt="">
        <section class="contenido">
        <img src="${tesise[1].img}" class="Foto" alt="">
            <div class="pequenaInfo">
                <span>${tesise[1].titulo}</span>
                <span>Idea:${tesise[1].idea}</span>
                <span>Autora:${tesise[1].Autora}</span>
                <span>Edicion:${tesise[1].Edicion}</span>
                <span>Fecha De Emision:${tesise[1].fechaDeEmision}</span>
                <span>Ultima Edicion:${tesise[1].ultimaEdicion}</span>
            </div>
        </section>
        <section class="infoGrande">
        <div class="contenido">
        <h2>${tesise[1].titulo}</h2>
        <h3>${tesise[1].sbtitulo}</h3>
        <p class="descrip">${tesise[1].descripcion}</p>
        </div>
        
                <a class="flecha" href="Tesis.html"><i class="fas fa-arrow-circle-left"></i></a>
    </section>
    </div>`
                break;
        case "3":
            main.innerHTML=``
            body.classList.toggle("clasebody")
            main.innerHTML=` <div class="tesis">
        <img src="img/diseñosmiru/Fondo resized.png" class="tesisFondo" alt="">
        <section class="contenido">
        <img src="${tesise[2].img}" class="Foto" alt="">
            <div class="pequenaInfo">
                <span>${tesise[2].titulo}</span>
                <span>Idea:${tesise[2].idea}</span>
                <span>Autora:${tesise[2].Autora}</span>
                <span>Edicion:${tesise[2].Edicion}</span>
                <span>Fecha De Emision:${tesise[2].fechaDeEmision}</span>
                <span>Ultima Edicion:${tesise[2].ultimaEdicion}</span>
            </div>
        </section>
        <section class="infoGrande">
        <div class="contenido">
        <h2>${tesise[2].titulo}</h2>
        <h3>${tesise[2].sbtitulo}</h3>
        <p class="descrip">${tesise[2].descripcion}</p>
        </div>
        
                <a class="flecha" href="Tesis.html"><i class="fas fa-arrow-circle-left"></i></a>
    </section>
    </div>`
                    break;
        case "4":
        main.innerHTML=``
        body.classList.toggle("clasebody")
        main.innerHTML=` 
        <div class="tesis">
         <img src="img/diseñosmiru/Fondo resized.png" class="tesisFondo" alt="">
         <section class="contenido">
            <img src="${tesise[3].img}" class="Foto" alt="">
            <div class="pequenaInfo">
            <span>${tesise[3].titulo}</span>
            <span>Idea:${tesise[3].idea}</span>
            <span>Autora:${tesise[3].Autora}</span>
            <span>Edicion:${tesise[3].Edicion}</span>
            <span>Fecha De Emision:${tesise[3].fechaDeEmision}</span>
            <span>Ultima Edicion:${tesise[3].ultimaEdicion}</span>
            </div>
           </section>
           <section class="infoGrande">
            <div class="contenido">
              <h2>${tesise[3].titulo}</h2>
               <h3>${tesise[3].sbtitulo}</h3>
               <p class="descrip">${tesise[3].descripcion}</p>
               </div>
                                  
            <a class="flecha" href="/Tesis.html"><i class="fas fa-arrow-circle-left"></i></a>
              </section>
             </div>`
             break;
      
          default:
              break;
      }   
    })
 })