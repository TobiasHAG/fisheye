import api from "../utils/api.js";
import photographerFactory from "../factories/photographer.js";
import mediaFactory from "../factories/mediaFactory.js";

    async function displayData(photographer) {
        const photographersHeader = document.querySelector(".photograph-header");
        const ModalHeader = document.getElementById("contact_modal_header");

                const photographerModel = photographerFactory(photographer);
                const SingleuserCardDOM = photographerModel.getSingleUserCardDOM();
                const SingleUserNameDOM = photographerModel.getSingleUserNameDOM();
                photographersHeader.appendChild(SingleuserCardDOM);
                ModalHeader.appendChild(SingleUserNameDOM);

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