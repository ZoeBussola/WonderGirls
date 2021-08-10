let biblioteca ={
    sagas :[6,2,5,5,2,3,4,3,30,13,3,2,2,6,27,4,7,5,8,3,14,13,
            3,5,3,2,2,7,2,2,6,6,5,8,2,6,2,2,3,10,2,4,9,4,
            4,3,4,2,5,3,2,4,5,3,4,4,5,2,2,4,1,2,3,4,2,7,
            2,3,9,3,4,6,3,5,19,4,2,9,3,3,7,5,3,2,4,2,18,2,
            4,3,10,12,3,5,3,2,6,2,5,4,4,2,4,5,2,3,2,7,5,10,
            2,6,14,5,3,5,2,4,4,1,4,3,5,3,2,3,2,4,8,5,3,3,3,
            4,9,12,3,5,3,14,6,5,2,9,2,2,3,6,2,4],
     libros :[173,29,32,],
     enPapel : [131,],
}
function sumarSaga() {
    return biblioteca.sagas.reduce((acumulador,elemento) => acumulador+elemento)
}
 function sumarLibros() {
    return biblioteca.libros.reduce((acumulador,elemento) => acumulador+elemento)
}
 function sumarEnPapel() {
    return biblioteca.enPapel.reduce((acumulador,elemento) => acumulador+elemento)
}
let sumarTotales = function () {
    return sumarEnPapel() + sumarLibros() +sumarSaga()
}
let totalSagas = biblioteca.sagas.length;

//console.log (sumarTotales());
//  console.log(sumarSaga())
//  console.log(sumarLibros())
//  console.log(sumarEnPapel())


let sagas = document.querySelector("#sagas")
sagas.innerText = totalSagas;
let totales = document.querySelector("#totales")
totales.innerText = sumarTotales()
let LporSagas = document.querySelector("#LporSagas")
LporSagas.innerText = sumarSaga()
let libros = document.querySelector("#libros")
libros.innerText = sumarLibros()
let enPapel = document.querySelector("#enPapel")
enPapel.innerText = biblioteca.enPapel



