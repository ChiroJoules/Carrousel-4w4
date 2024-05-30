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

    function resize_fenetre_carrousel(){
        //recuperer les dimensions de l'image
        let carrousel__img = carrousel__figure.querySelector('.carrousel__img');
        let imageWidth = carrousel__img.naturalWidth;
        let imageHeight = carrousel__img.naturalHeight;

        //recuperer les dimensions de la boite du carrousel
        let boiteWidth = carrousel.offsetWidth;
        let boiteHeight = carrousel.offsetHeight;

        //recuperer les dimensions de la fenetre
        let fenetrewidth = window.innerWidth;
        let fenetreheight = window.innerHeight;

        //calculer les nouvelles dimensions de l'image en respectant son ratio
        let maxWidth = Math.min(imageWidth, fenetrewidth * 0.8);
        let newHeight = Math.round((maxWidth / imageWidth) * imageHeight);

        //si la nouvelle hauteur est plus grande que le 80% de l'hauteur de la fenetre
        if (newHeight > fenetreheight * 0.8) {

            //On reduit son hauteur pour qu'elle soit inferieur par rapport au 80% de l'hauteur de la fenetre
            Math.round(newHeight = fenetreheight * 0.8); 

            //On recalcule la largeur avec la nouvelle hauteur
            maxWidth = Math.round((newHeight / imageHeight) * imageWidth);
        }

        //On applique les nouvelles dimensions à la boite du carrousel
        carrousel.style.width = `${maxWidth}px`;
        carrousel.style.height = `${newHeight}px`;

        //On centre la boite du carrousel par rapport à la fenetre
        carrousel.style.top = `calc(50% - ${newHeight / 2}px)`;
        carrousel.style.left = `calc(50% - ${maxWidth / 2}px)`;

        //Console log pour voir les nouvelles dimensions chaque fois qu'on resize la fenetre
        console.log(`Nouvelle largeur: ${maxWidth}px`);
        console.log(`Nouvelle hauteur: ${newHeight}px`);
    }
    
    /** Event Listener pour ouvrir le carrousel  */
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    //Event Listener pour redimensionner le carrousel avec la fenetre
    window.addEventListener('resize', resize_fenetre_carrousel);

    // Event Listener pour redimensionner le carrousel avec le bouton
    bouton.addEventListener('mousedown', resize_fenetre_carrousel)

 /** Event Listener pour fermer le carrousel  */
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

})()