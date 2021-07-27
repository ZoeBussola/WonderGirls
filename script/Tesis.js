const tesise=[
    {
        titulo:'Dolly Parton Multiverse',
        sbtitulo:"Los principios del DPM",
        img:'img/diseñoMiru/Recurso 5.png',
        descripcion:'Espero ideas...',
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

]

 let cajaCarpetas=document.querySelector(".cajaCarpetas");

  tesise.forEach(tesis=>{
      cajaCarpetas.innerHTML +=`
      <div class="carpetaGeneral" id="${tesis.id}">
      <img src="img/diseñoMiru/CarpetaTeoria.png"  class="carpeta" alt="">
      <span>${tesis.titulo}</span>
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
        <img src="img/diseñoMiru/FondoTeoria.png" class="tesisFondo" alt="">
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
                <p>${tesise[0].descripcion}</p>
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
        <img src="img/diseñoMiru/FondoTeoria.png" class="tesisFondo" alt="">
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
        <p>${tesise[1].descripcion}</p>
        </div>
        
                <a class="flecha" href="Tesis.html"><i class="fas fa-arrow-circle-left"></i></a>
    </section>
    </div>`
                break;
        case "3":
            main.innerHTML=``
            body.classList.toggle("clasebody")
            main.innerHTML=` <div class="tesis">
        <img src="img/diseñoMiru/FondoTeoria.png" class="tesisFondo" alt="">
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
        <p>${tesise[2].descripcion}</p>
        </div>
        
                <a class="flecha" href="Tesis.html"><i class="fas fa-arrow-circle-left"></i></a>
    </section>
    </div>`
                    break;
      
          default:
              break;
      }   
    })
 })