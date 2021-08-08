const Frases =[
    {
        frace:'Una noche en pedo le entro a manivela (de robots)',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'Yo chupo lo que venga',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'Ferraro hablando cetáceo para comunicarse con zochu',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'¿Por qué estoy viendo la pochola de Yanina Latorre?',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'Por lo menos voy a morir junto a macaco (se refería a makano)',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'En la cola a todos un poquito nos gusta',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'Efecto de Zac Efron no canta las canciones de High School Musical: yo ya sé que no las canta pero cada vez que me la dicen me sorprendo',
        autor:'Zochu',
        estitica:'Zochu',
    },
    {
        frace:'Ente vegano',
        autor:'Miru',
        estitica:'Miru',
    },
    {
        frace:'A la gente que se siente identificado con kaneki hay que exterminarlas de esta tierra ',
        autor:'Miru',
        estitica:'Miru',
    },
    {
        frace:'Vibra la pochola',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'¿Sabes por quien daría plata para ver pelado?',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'Miru y Ferchu hacen una tesis titulada Jesús: el nacimiento del influencer. ',
        autor:'Todas',
        estitica:'Todas',
    },
    {
        frace:'En este momento daría mi orto para que venga un oso',
        autor:'Horny Zochu',
        estitica:'Zochu',
    },
    {
        frace:'Ferraro come culo',
        autor:'Miru',
        estitica:'Miru',
    },
    {
        frace:'Cuando me enojo no hay otra, me las voy a comer todas ',
        autor:'Ferchumaster',
        estitica:'Ferraro',
    },
    {
        frace:'No hay día que no piense en meterme una poronga',
        autor:'Ferraro',
        estitica:'Ferraro',
    },
    {
        frace:'Mucha Libertad de expresión',
        autor:'Miru',
        estitica:'Miru',
    },
    {
        frace:'Voy a estar con harry styles y harry va a se el feo de la relación',
        autor:'Ferchumaster',
        estitica:'Ferraro',
    },
    {
        frace:'En su cultura culeaban medio como animales, él la daba vuelta, le daba y ya está ',
        autor:'Sunny Val',
        estitica:'Ferraro',
    },
    {
        frace:'Miru: *hace sonidos de gaita* Ferraro: LIBERTAD',
        autor:'Miru y Ferraro',
        estitica:'MiruYFerraro',
    },
    {
        frace:'Monjando',
        autor:'Miru',
        estitica:'Miru',
    },
    {
        frace:'Si nos secuestran guárdense en el culo una foto de Dolly Parton',
        autor:'honestamente no hace falta poner quien es',
        estitica:'Ferraro',
    },
    {
        frace:'Ferrari mata genocidio',
        autor:'Miru',
        estitica:'Miru',
    },
    {
        frace:'Tengo solo una pochola brillante, nada picante',
        autor:'Ferchumaster',
        estitica:'Ferraro',
    },
]

const chicas=[
   
    {
        imgFondo:"img/twiter/61D3D42C15F4B555.jpg",
        imgPerfil:"img/twiter/Icono Ferchu.png",
        nombre:"Ferchu",
        arroba:"Ferchumaster",
        texto:"Horny nivel 100: le da a todo lo que de sombra. Militante de Harry Styles.",
        locacion:"Mar del Tuyú",
        signo:"Piscis",
        siguiendo:"69",
        seguidores:"420",
    },
    {
        imgFondo:"img/twiter/333.jpeg",
        imgPerfil:"img/twiter/Icono Zochu.png",
        nombre:"Zochu",
        arroba:"Alexandria",
        texto:"En su mente almacena el conocimiento de más de mil libros, pero no pone tildes.",
        locacion:"Not-Hoth",
        signo:"Libra",
        siguiendo:"10",
        seguidores:"333",
    },
    {
        imgFondo:"img/twiter/61D3D42C15F4B55F.jpg",
        imgPerfil:"img/twiter/Icono Miru.png",
        nombre:"Miruchi",
        arroba:"Mirulais",
        texto:"Si la dejas hablar por mucho tiempo arma un atentado. Le gustó Bowie en Laberinto.",
        locacion:"La Lona",
        signo:"Sagitario",
        siguiendo:"33",
        seguidores:"911",
    },
]


 let main =document.querySelector("main")

chicas.forEach(chica=>{
    main.innerHTML+=`
    
    <div class="card">
   <section class="fondoPerfil">
   <img class="imgFondo" src="${chica.imgFondo}" alt="" srcset="">
        </section>
    <section class="secinfo">
    <div class="cajaDeBt">
        <img class="imgPerfil" src="${chica.imgPerfil}" alt="" srcset="">
        <button class="botonEditarPerfil">Editar Perfil</button>
    </div>
        <div class="infoPerfil">
            <h3>${chica.nombre}</h3>
            <small>@${chica.arroba}</small>
            <p>${chica.texto}</p>
        </div>
        <div class="infoPequenia">
           <span><i class="fas fa-map-marker-alt"></i> ${chica.locacion}<img class="imgIcono" src="img/twiter/Recurso 1.png" alt=""> ${chica.signo}</span>
           <span class="seguidores"><i>${chica.siguiendo}</i> Siguiendo <i class="secondIcono">${chica.seguidores}</i> Seguidores</span>
        </div>
    </section>
</div>`
})

let mainFra=document.querySelector('#main2')
Frases.forEach(frase=>{

    switch (frase.estitica) {
        case 'Ferraro':
            mainFra.innerHTML+=`
            <div class="twit">
            <img src="img/twiter/Icono Ferchu.png" alt="">
            <section class="sectionInfo">
                <div class="titulo">
                <div class="tituloNombre">
                <h2>${frase.autor}</h2>
                <small>@${chicas[0].nombre}</small>
            </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <p>${frase.frace}</p>
                <div class="cajaIconos">
                    <i class="far fa-comment"> <span class="spanNumero">0</span></i>
                    <i class="fas fa-retweet"> <span class="spanNumero">0</span></i>
                    <i class="far fa-heart"> 
                    <span class="spanNumero">0</span></i>
                </div>
            </section>
        </div>
            `
            break;
            case 'Miru':
                mainFra.innerHTML+=`
                <div class="twit">
                <img src="img/twiter/Icono Miru.png" alt="">
                <section class="sectionInfo">
                    <div class="titulo">
                        <div class="tituloNombre">
                        <h2>${frase.autor}</h2>
                        <small>@${chicas[2].nombre}</small>
                    </div>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <p>${frase.frace}</p>
                    <div class="cajaIconos">
                        <i class="far fa-comment"> <span class="spanNumero">0</span></i>
                        <i class="fas fa-retweet"> <span class="spanNumero">0</span></i>
                        <i class="far fa-heart"> 
                        <span class="spanNumero">0</span></i>
                    </div>
                </section>
            </div>
                `
                break;
                case 'Zochu':
                    mainFra.innerHTML+=`
                    <div class="twit">
                    <img src="img/twiter/Icono Zochu.png" alt="">
                    <section class="sectionInfo">
                    <div class="titulo">
                    <div class="tituloNombre">
                    <h2>${frase.autor}</h2>
                    <small>@${chicas[1].nombre}</small>
                </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <p>${frase.frace}</p>
                        <div class="cajaIconos">
                            <i class="far fa-comment"> <span class="spanNumero">0</span></i>
                            <i class="fas fa-retweet"> <span class="spanNumero">0</span></i>
                            <i class="far fa-heart"> 
                            <span class="spanNumero">0</span></i>
                        </div>
                    </section>
                </div>
                    `
                    break;
                
        default:
            break;
    }

   
})

let btnGeneral = document.querySelector(".tweetsGenerales")
let perfiles=document.querySelectorAll('.card')
let bodyfr =document.querySelector("body")

perfiles[0].addEventListener('click',function () {
    bodyfr.style.backgroundColor ='#D0EEFF'
    btnGeneral.style.display = "block";
    btnGeneral.style.color="#63D5D4";
    btnGeneral.style.border="2px solid #63D5D4";
    perfiles[0].style.boxShadow = 'none';
    perfiles[0].classList.remove("oscurecer")
    perfiles[1].classList.add("oscurecer")
    perfiles[2].classList.add("oscurecer")
    mainFra.innerHTML=``
    Frases.forEach(frase=>{
        if (frase.estitica =='Ferraro' ) {
            
            mainFra.innerHTML+=`
            <div class="twit">
            <img src="img/twiter/Icono Ferchu.png" alt="">
            <section class="sectionInfo">
                <div class="titulo">
                <div class="tituloNombre">
                <h2>${frase.autor}</h2>
                <small>@${chicas[0].nombre}</small>
            </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <p>${frase.frace}</p>
                <div class="cajaIconos">
                    <i class="far fa-comment"> <span class="spanNumero">0</span></i>
                    <i class="fas fa-retweet"> <span class="spanNumero">0</span></i>
                    <i class="far fa-heart"> 
                    <span class="spanNumero">0</span></i>
                </div>
            </section>
        </div>
            `
        }
    })
})

perfiles[1].addEventListener('click',function () {
    bodyfr.style.backgroundColor ='#321156'
    perfiles[1].style.boxShadow = 'none';
    btnGeneral.style.display = "block";
    btnGeneral.style.color="white";
    btnGeneral.style.border="2px solid white";
    perfiles[1].classList.remove("oscurecer")
    perfiles[0].classList.add("oscurecer")
    perfiles[2].classList.add("oscurecer")
    mainFra.innerHTML=``
    Frases.forEach(frase=>{
        if (frase.estitica =='Zochu' ) {
            mainFra.innerHTML+=`
                    <div class="twit">
                    <img src="img/twiter/Icono Zochu.png" alt="">
                    <section class="sectionInfo">
                    <div class="titulo">
                    <div class="tituloNombre">
                    <h2>${frase.autor}</h2>
                    <small>@${chicas[1].nombre}</small>
                </div>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <p>${frase.frace}</p>
                        <div class="cajaIconos">
                            <i class="far fa-comment"> <span class="spanNumero">0</span></i>
                            <i class="fas fa-retweet"> <span class="spanNumero">0</span></i>
                            <i class="far fa-heart"> 
                            <span class="spanNumero">0</span></i>
                        </div>
                    </section>
                </div>
                    `
        }
    })
})

perfiles[2].addEventListener('click',function () {
    bodyfr.style.backgroundColor ='#FCB9B2'
    perfiles[2].style.boxShadow = 'none';
    btnGeneral.style.display = "block";
    btnGeneral.style.color="white";
    btnGeneral.style.border="2px solid white";
    perfiles[2].classList.remove("oscurecer")
    perfiles[0].classList.add("oscurecer")
    perfiles[1].classList.add("oscurecer")
    mainFra.innerHTML=``
    Frases.forEach(frase=>{
        if (frase.estitica =='Miru' ) {
            mainFra.innerHTML+=`
                <div class="twit">
                <img src="img/twiter/Icono Miru.png" alt="">
                <section class="sectionInfo">
                    <div class="titulo">
                        <div class="tituloNombre">
                        <h2>${frase.autor}</h2>
                        <small>@${chicas[2].nombre}</small>
                    </div>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <p>${frase.frace}</p>
                    <div class="cajaIconos">
                        <i class="far fa-comment"> <span class="spanNumero">0</span></i>
                        <i class="fas fa-retweet"> <span class="spanNumero">0</span></i>
                        <i class="far fa-heart"> 
                        <span class="spanNumero">0</span></i>
                    </div>
                </section>
            </div>
                `
        }
    })
})



/*
 let article =document.querySelector("article")
 Frases.forEach(frace => {

    switch (frace.estitica) {
        case "Ferraro":
            main.innerHTML +=`
                  <article class="ferraro">
                    <div class="fracetexto">
             <h3>${frace.frace} </h3>
             <span class="autortexto"> ${frace.autor} </span>
             </div>
             </article>
              `
            break;
            case 'Miru':
                main.innerHTML +=`
          <article class="miru">
          <div class="fracetexto">
        <h3>${frace.frace} </h3>
        <span class="autortexto"> ${frace.autor} </span>
        </div>
        </article>
      `
                break;
                case 'Todas':
                main.innerHTML +=`
          <article class="todas">
          <div class="fracetexto">
        <h3>${frace.frace} </h3>
        <span class="autortexto"> ${frace.autor} </span>
        </div>
        </article>
      `
                break;
                case 'MiruYFerraro':
                    main.innerHTML +=`
              <article class="MiruyFerchu">
              <div class="fracetexto">
            <h3>${frace.frace} </h3>
            <span class="autortexto"> ${frace.autor} </span>
            </div>
            </article>
          `
                    break;
        default:
            main.innerHTML +=`
            <article class="zochu">
            <div class="fracetexto">
          <h3>${frace.frace} </h3>
          <span class="zochuspan"> ${frace.autor} </span>
          </div>
          </article>
        `
            break;
    }

 }
)
   */ 
