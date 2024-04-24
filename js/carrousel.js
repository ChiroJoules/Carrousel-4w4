(function(){
    console.log("Vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x')
    let galerie = document.querySelector('.galerie');

    let carrousel__figure = document.querySelector('.carrousel__figure');

    let galerie__img = galerie.querySelectorAll('img');

    let index = 0;

    for(const elm of galerie__img){

        creerImageCarrousel(index, elm);

        creer_radio_carrousel(index);

        index = index + 1;
    }

    /**
     * 
     * @param {*} index le numero de l'image
     * @param elm l'élément image de la galérie
     */

    function creerImageCarrousel(index,elm){
        /* Creation dynamique d'une image du carrousel */
        let carrousel__img = document.createElement('img');

        carrousel__img.src = elm.src;
        
        carrousel__img.classList.add('carrousel__img');

        carrousel__img.dataset.index = index;

        carrousel__figure.appendChild(carrousel__img);
    }

    /**
     * Création du bouton radio pour le carrousel
     * @param {*} index le numéro du radio
     */
    function creer_radio_carrousel(index){
        let carrousel__form = document.querySelector('.carrousel__form')
        let carrousel_radio = document.createElement('input');
        //class 
        carrousel_radio.classList.add('carrousel_radio');
        //index
        carrousel_radio.dataset.index = index;
        //type
        carrousel_radio.type = 'radio';
        //name
        carrousel_radio.name = 'imageRadio';
        //ajouter dans carrousel__form
        carrousel__form.appendChild(carrousel_radio);

        //ajouter un écuteur qui permettra de changer l'opacité de l'image "index"
        carrousel_radio.addEventListener('click', function(){
            let index = this.dataset.index; //index de l'image
            let carrousel__imgs = carrousel__figure.children; //collection des images du carrousel
            for (const img of carrousel__imgs) {
                
                img.style.opacity = 0;

            }
            carrousel__imgs[index].style.opacity = 1;
        })

    }

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