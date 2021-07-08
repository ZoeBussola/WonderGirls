const PelisNostalgicas=[
    {
        titulo:'Arthur y los minimois 1,2 y 3',
        img:'https://pics.filmaffinity.com/Arthur_y_los_Minimoys-169559046-large.jpg'
    },
    {
        titulo:'Pequeños invasores',
        img:'https://www.ecartelera.com/carteles/3300/3385/001_m.jpg',
    },
    {
        titulo:'Ant bully',
        img:'http://photos1.blogger.com/blogger/2826/1614/1600/ant%20bully.jpg',
    },
    {
        titulo:'Zathura',
        img:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/397c74654860405a266e7924ccecbf2b110669c8b8d2cb762fab1f8f6ce7499d._RI_V_TTW_.jpg',
    },
    {
        titulo:'Winnie the pooh película',
        img:'https://pequelia.republica.com/files/2011/04/winniethepoohpelicula-499x500.jpg',
    },
    {
        titulo:'Frutillita película de navidad ',
        img:'/img/PelisN/Frutillita.jpg',
    },
    {
        titulo:'House of mouse especial de halloween',
        img:'https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F015%2F097%2Fel-club-de-los-villanos-1.jpg&nuevoancho=690&medio=abc',
    },
    {
        titulo:'The legend of tarzan',
        img:'https://es.web.img3.acsta.net/pictures/210/468/21046818_20131004140133911.jpg',
    },
    {
        titulo:'Película de goofy 2',
        img:'/img/PelisN/Extremadamente_goofy.jpg',
    },
    {
        titulo:'Las locuras de kronk',
        img:'https://1.bp.blogspot.com/-jLAbnqL9rK0/XXgXaDYj_XI/AAAAAAAAMx4/2xFEyUlL5koHBChjCtMmztASoiCR_IGQQCKgBGAsYHg/s1600/Las%2Blocuras%2Bde%2BKronk%2B1080p%2BLatino.png',
    },
    {
        titulo:'Oliver y su pandilla',
        img:'https://pics.filmaffinity.com/Oliver_y_su_pandilla-226062115-large.jpg',
    },
    {
        titulo:'Jimmy y el durazno gigante',
        img:'https://i.pinimg.com/originals/59/cc/4d/59cc4ddc6e5575f6890cd791bd6e80f5.jpg',
    },
    {
        titulo:'Atlantis 2',
        img:'https://pics.filmaffinity.com/Atlantis_El_regreso_de_Milo-437904069-large.jpg',
    },
    {
        titulo:'George de la selva 1,2',
        img:'https://images-na.ssl-images-amazon.com/images/I/81apQUeSDrL._SL1265_.jpg',
    },
    {
        titulo:'Brujillizas 1 y 2',
        img:'https://pics.filmaffinity.com/Brujillizas_TV-877498566-mmed.jpg',
    },
    {
        titulo:'Eres tan cupido',
        img:'https://play-lh.googleusercontent.com/HqThUBvSS_duKAZzqWi45odG_bmqdeIhlnkIKH-N8MmMIrRqPuA1F_RJQsAqCYAAz94',
    },
    {
        titulo:'Pizza my Heart',
        img:'https://play-lh.googleusercontent.com/aTXXd04_-buu5eA0pRVXMm79JkN6swnSY3-KHMBy7a-QABNfSTq6U0a0acw-kpQy5GQ',
    },
    {
        titulo:'Diario de una adolescente',
        img:'/img/PelisN/196751.jpg',
    },
    {
        titulo:'La niñera vampiro',
        img:'https://www.themoviedb.org/t/p/w500/bBH0zyyMblIecCWgc4zDGT5KaNA.jpg',
    },
    {
        titulo:'Pedro pollo',
        img:'/img/PelisN/Hatchingpeteposter.jpg',
    },
    {
        titulo:'Minutemen',
        img:'https://i.redd.it/802p2l32cu751.jpg',
    },
    {
        titulo:'Halloweentown 1 2 3',
        img:'/img/PelisN/Disney_-_Halloweentown.jpg',
    },
    {
        titulo:'La guardería de papá',
        img:'https://mx.web.img3.acsta.net/pictures/18/11/20/23/47/1632867.jpg',
    },
    {
        titulo:'La mansion embrujada',
        img:'/img/PelisN/La_mansion_embrujada_portada.jpg',
    },
    {
        titulo:'Pequeños genios',
        img:'https://pics.filmaffinity.com/Peque_os_Genios_y_los_tesoros_de_Egipto-527707483-large.jpg',
    },
    {
        titulo:'Un golpe de suerte',
        img:'/img/PelisN/JustMyLuck.jpg',
    },
    
]
let main=document.querySelector("main");

PelisNostalgicas.forEach(peliculaN =>{
    main.innerHTML +=`
    <div class="tarjetaPN">
    <img src="${peliculaN.img}" alt="">
    <h3>${peliculaN.titulo}</h3>
    </div>
    `
})