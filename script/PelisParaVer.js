const pelisParaVer =[
    {
        titulo:'Beetlejuice',
        id:1,
    },
    {
        titulo:'Anastasia',
        id:2,
    },
    {
        titulo:'Memorias de una Geisha',
        id:3,
    },
    {
        titulo:'Avatar',
        id:4,
    },
    {
        titulo:'In The Heighs',
        id:5,
    },
    {
        titulo:'Palabras Que Burbujean',
        id:6,
    },
]

let contenedor = document.querySelector("#textos")

pelisParaVer.forEach(pelicula=>{
    contenedor.innerHTML+=`
            <section>
                <input type="checkbox" id="cb${pelicula.id}" name="cb${pelicula.id}">
                <label class="textos" for="cb${pelicula.id}">${pelicula.titulo}</label>
              </section>`
           
    
   
})

document.querySelector('#cb4').checked=true

let contRandom = document.querySelector('#acanombre');
let boton = document.querySelector(".boton")


boton.addEventListener("click",function () {
    let numeroRan = Math.round(Math.random() * (pelisParaVer.length - 1))
    contRandom.innerHTML=`
    <h2 class="Rtextos">
    ${pelisParaVer[numeroRan==3?numeroRan-1:numeroRan].titulo}
    </h2>
    `
    contRandom.classList.toggle('aparecer')
    contRandom.classList.toggle('aparecerDos')
})


