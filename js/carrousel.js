(function(){
    console.log("Vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x')
    let galerie = document.querySelector('.galerie');



    let carrousel__figure = document.querySelector('.carrousel__figure');

    /* Creation dynamique d'une image du carrousel */
    let carrousel__img = document.createElement('img');
    carrousel__img.classList.add('carrousel__img');

    let galerie__img = galerie.querySelectorAll('img');

    for(const elm of galerie__img){
        console.log(elm.src);
    }

    carrousel__figure.appendChild(carrousel__img);
    console.log(carrousel__figure);

 /** Event Listener pour ouvrir le carrousel  */
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

 /** Event Listener pour fermer le carrousel  */
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    /* Pour creer un collection d'images de la galérie */


})()