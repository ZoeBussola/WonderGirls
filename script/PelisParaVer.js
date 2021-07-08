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
]

let contenedor = document.querySelector("div")

pelisParaVer.forEach(pelicula=>{
    contenedor.innerHTML+=`
            <section>
                <input type="checkbox" id="cb${pelicula.id}" name="cb${pelicula.id}">
                <label class="textos" for="cb${pelicula.id}">${pelicula.titulo}</label>
              </section>`
              
})
