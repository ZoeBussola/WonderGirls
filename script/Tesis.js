const tesise=[
    {
        titulo:'Dolly Parton Multiverse',
        img:'https://ichef.bbci.co.uk/news/640/cpsprodpb/158E9/production/_116779288_3c73d84c-3ac6-4d6b-b06c-3dcdccb2a656.jpg',
        descripcion:'Espero ideas',
    },
    {
        titulo:'Los 4 unicos compositores',
        img:'https://direct.rhapsody.com/imageserver/images/Art.41457/356x237.jpg',
        descripcion:'Espero ideas',
    },
    {
        titulo:'Bob Marley es jesus',
        img:'https://data.whicdn.com/images/73873859/original.jpg',
        descripcion:'Espero ideas',
    },

]

let main=document.querySelector("main");

tesise.forEach(tesis=>{
    main.innerHTML +=`
        <div class="contenedor">
        <h3 class="titulo">${tesis.titulo}</h3>
        <img src="${tesis.img}" alt="" srcset="" class="imagen">
        <p class="descripcion">Descripcion: ${tesis.descripcion}</p>
                `
})