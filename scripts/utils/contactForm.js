const modal_button = document.querySelector(".contact_button");
const close_lightbox = document.querySelector(".lightbox-close");
const link_photo = document.querySelector(".link-img");
const next = document.querySelector(".after-slide");

// Display la modal du formulaire ON/OFF

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
};

// Display de la modal lightbox

const { id, photographerId, title } = data;

function getNextMedia(current, data) {
    const currentPos = list.findIndex(item => item.id === current.id);
    return currentPos + 1 < current.length ? next + 1 : 0;
};

const imageUrl = `assets/media/${data.image}`;
const displayMedia = (media) => {
    console.log(imageUrl);
    const img = document.querySelector(".lightbox-img");
    img.setAttribute("src", imageUrl);
    const description = document.querySelector(".lightbox-desc");
    description.innerHTML = media.title;
}

function displayModalLightbox(data, media) {
    const modal2 = document.querySelector(".lightbox-modal");
	modal2.style.display = "block";
    let currentMedia = media;
    next.addEventListener("click", () => {
        const nextPos = getNextMedia(currentMedia, data.medias);
        currentMedia = data.medias[nextPos];
        displayMedia(currentMedia);
    });
    displayMedia(media);
}

function closeModalLightbox() {
    const modal2 = document.querySelector(".lightbox-modal");
    modal2.style.display = "none";
}

// Récupération des id du formulaire pour vérification

const prenom = document.getElementById("first");
const nom =  document.getElementById("last");
const mail =  document.getElementById("email");
const message = document.getElementById("message");

// Regex mail prénom nom

var mailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var prenomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var nomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;

const validation = document.getElementById("btn_envoyer");

// Fonction de vérification après click sur submit formulaire des éléments
// Renvoie un console log en cas de réussite

function validate(e) {
    e.preventDefault();
    if (prenom.value.trim() === '' || prenom.value.length< 2)
    {
        prenom.innerHTML = document.getElementById(prenom);
    }

    if (nom.value.trim() === '' || nom.value.length < 2)
    {
      nom.innerHTML = document.getElementById(nom);
    }

    if (mailregex.test(mail.value) == false) {
          mail.innerHTML = document.getElementById(mail);
        }

    if (prenom.value && nom.value && mail.value === true)
            {
                console.log("Formulaire concluant")
            }
    console.log("test2");              
}

validation.addEventListener("click", validate);
close_lightbox.addEventListener("click", closeModalLightbox);