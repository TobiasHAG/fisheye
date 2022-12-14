async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json

    try {
            let photographers = await fetch('data/photographers.json');
            console.log(photographers)
            return await photographers.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function displayData(photographers) {
        const photographersHeader = document.querySelector(".photograph-header");

        const params = (new URL(document.location)).searchParams;
        const id = params.get('id');
        const nombre = "82";
        console.log(id);

        // TODO : vérification id URL avec id JSON pour renvoyer les bonne données
        photographers.for((photographer) => {
           if (id === nombre) {
                const photographerModel = photographerFactory(photographer);
                const SingleuserCardDOM = photographerModel.getSingleUserCardDOM();
                photographersHeader.appendChild(SingleuserCardDOM);
            };
        });
    };

    async function initPage() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    initPage();
//Mettre le code JavaScript lié à la page photographer.html