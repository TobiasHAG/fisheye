    import api from "../utils/api.js";
    import photographerFactory from "../factories/photographer.js";

    // et bien retourner le tableau photographers seulement une fois

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        await api.fetchData();
        displayData(api.photographers.photographers);
    };
    
    init();