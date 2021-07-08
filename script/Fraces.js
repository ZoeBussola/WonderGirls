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

]


 let main =document.querySelector("main")
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



//     if (frace.estitica==='Ferraro') {
//          main.innerHTML +=`
//          <article class="ferraro">
//            <div class="fracetexto">
//     <h3>${frace.frace} </h3>
//     <span class="autortexto"> ${frace.autor} </span>
//     </div>
//     </article>
//      `
//     }
//     else{
//         main.innerHTML +=`
//          <article class="miru">
//            <div class="fracetexto">
//     <h3>${frace.frace} </h3>
//     <span class="autortexto"> ${frace.autor} </span>
//     </div>
//     </article>
//      `
//     }
 }
)
    
