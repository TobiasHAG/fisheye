import api from "../utils/api.js";
import photographerFactory from "../factories/photographer.js";
import mediaFactory from "../factories/mediaFactory.js";

/**
 * The function takes a photographer object as an argument, and then creates a photographer model, and
 * then creates a DOM element for the photographer's card, and then creates a DOM element for the
 * photographer's name, and then appends the card to the header, and then appends the name to the contact
 * modal header.
 * @param photographer
 */

    async function displayData(photographer) {
        const photographersHeader = document.querySelector(".photograph-header");
        const ModalHeader = document.getElementById("contact_modal_header");

                const photographerModel = photographerFactory(photographer);
                const SingleuserCardDOM = photographerModel.getSingleUserCardDOM();
                const SingleUserNameDOM = photographerModel.getSingleUserNameDOM();
                photographersHeader.appendChild(SingleuserCardDOM);
                ModalHeader.appendChild(SingleUserNameDOM);

    };

    /**
     * The function displayDataMedia() is an asynchronous function that takes a photographer as an
     * argument and displays the photographer's media in a grid.
     * @param photographer - {
     */

    async function displayDataMedia(photographer) {
        const MediaHeader = document.querySelector(".photos-grid"); 

        photographer.medias.forEach((media) => {
            //console.log(photographer.medias[0].title);
            const MediaModel = mediaFactory(media);
            const MediaCardDOM = MediaModel.getMediaCardDOM();
            MediaCardDOM.addEventListener('click', () => {
                displayDataMediaOne(media, photographer.medias)
            });
            MediaHeader.appendChild(MediaCardDOM);
        });
    };

    // IN WORK : Fonction pour display back avec les filtres les medias, en récupérant
    // le tableau medias et en renvoyant avec un sort (ici pour test par titre)

    async function DisplayFilter(photographer) {
        const FilterPopu = document.querySelector('#filter');
        FilterPopu.addEventListener('click', () => {
            for( let i = 0; i < 11; i++) {
                const test2 = [ photographer.medias[i].title ];
                test2.sort();
                console.log(test2);
            }
        });
    };

    const FilterOption = document.querySelector("#filter");
    switch(FilterOption.value) {
        case 'Popularite' :
            console.log("test1");
            break;
        case 'Titre' :
            console.log("test2");
            break;
        case 'Date' :
            console.log("test3");
            break;
    }  
/**
 * The function displayDataMediaOne() is an async function that takes two parameters, currentMedia and
 * medias, and then it creates a constant called LightboxHeader that is equal to the querySelector of
 * the class modal-2. Then it creates a constant called LightboxMediaDOM that is equal to the function
 * displayModalLightbox() which takes two parameters, currentMedia and medias. Then it appends the
 * LightboxMediaDOM to the LightboxHeader.
 * @param currentMedia - {
 * @param medias - [{
 */

    async function displayDataMediaOne(currentMedia, medias) {
        const LightboxHeader = document.querySelector(".modal-2");
        const LightboxMediaDOM = displayModalLightbox(currentMedia, medias); // photographer.medias
        LightboxHeader.appendChild(LightboxMediaDOM);
    };

    /**
     * The function is called initPage, it's an async function, it calls the fetchData function from
     * the api.js file, then it calls the displayData function, then it calls the displayDataMedia function.
     */

    async function initPage() {
        await api.fetchData();
        displayData(api.photographer);
        displayDataMedia(api.photographer);
        DisplayFilter(api.photographer);
        // displayDataMediaOne(api.photographer);
    };
    
    initPage();