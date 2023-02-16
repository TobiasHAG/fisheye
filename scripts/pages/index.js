    import api from "../utils/api.js";
    import photographerFactory from "../factories/photographer.js";

/**
 * It takes an array of photographer objects, loops through them, creates a photographer model for each
 * one, and then appends the DOM element for each photographer model to the DOM
 * @param photographers - an array of objects that contain the data for each photographer.
 */
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

/**
 * > The function `init()` is an asynchronous function that calls the `fetchData()` function from the
 * `api` object, and then calls the `displayData()` function with the `photographers` array from the
 * `api` object as an argument
 */
    async function init() {
        await api.fetchData();
        displayData(api.photographers.photographers);
    };
    
    init();