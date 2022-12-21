    import api from "../utils/api.js";
    console.log(api)
    console.log(api.fetchData());
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
        const { photographers } = await api.fetchData();
        displayData(photographers);
    };
    
    init();