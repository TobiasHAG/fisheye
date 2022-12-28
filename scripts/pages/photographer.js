import api from "../utils/api.js";
import photographerFactory from "../factories/photographer.js";
import mediaFactory from "../factories/mediaFactory.js";

    async function displayData(photographers) {
        const photographersHeader = document.querySelector(".photograph-header");

        const params = (new URL(document.location)).searchParams;
        const id = params.get('id');
        const nombre = 82;
        console.log(id);

        // TODO : vérification id URL avec id JSON pour renvoyer les bonne données
        console.log(api.photographers.photographers[2].id);
        const result = photographers.filter(photographer => photographers.id === nombre);
        console.log(result);
        photographers.forEach((photographer) => {
           if (id === nombre) {
                const photographerModel = photographerFactory(photographer);
                const SingleuserCardDOM = photographerModel.getSingleUserCardDOM();
                photographersHeader.appendChild(SingleuserCardDOM);
            };
        });

    async function displayDataMedia(photographers) {
        const MediaHeader = document.querySelector(".photos-grid"); 

        photographers.forEach((media) => {
            const MediaModel = mediaFactory(media);
            const MediaCardDOM = MediaModel.getMediaCardDOM();
            MediaHeader.appendChild(MediaCardDOM);
        });
    };

    async function initPage() {
        // Récupère les datas des photographes
        await api.fetchData();
        displayData(api.photographers.photographers);
        displayDataMedia(api.photographers.media);
    };
    
    initPage();
//Mettre le code JavaScript lié à la page photographer.html