import api from "../utils/api.js";
import photographerFactory from "../factories/photographer.js";
import mediaFactory from "../factories/mediaFactory.js";

    async function displayData(photographer) {
        const photographersHeader = document.querySelector(".photograph-header");

        //const params = (new URL(document.location)).searchParams;
        //const id = params.get('id');
        //const nombre = 82;
        //console.log(id);

        // TODO : vérification id URL avec id JSON pour renvoyer les bonne données

                const photographerModel = photographerFactory(photographer);
                const SingleuserCardDOM = photographerModel.getSingleUserCardDOM();
                photographersHeader.appendChild(SingleuserCardDOM);
    };

    async function displayDataMedia(photographer) {
        const MediaHeader = document.querySelector(".photos-grid"); 

        photographer.medias.forEach((media) => {
            const MediaModel = mediaFactory(media);
            const MediaCardDOM = MediaModel.getMediaCardDOM();
            MediaHeader.appendChild(MediaCardDOM);
        });
    };

    async function initPage() {
        // Récupère les datas des photographes
        await api.fetchData();
        displayData(api.photographer);
        displayDataMedia(api.photographer);
    };
    
    initPage();