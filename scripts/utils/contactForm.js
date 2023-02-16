/* It's selecting the elements of the DOM. */
const modal_button = document.querySelector(".contact_button");
const close_lightbox = document.querySelector(".lightbox-close");
const link_photo = document.querySelector(".link-img");
const next = document.querySelector(".after-slide");

/**
 * When the user clicks the button, display the modal.
 */

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

/**
 * When the user clicks on the close button, the modal is hidden
 */

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
};

/**
 * If the current position is less than the length of the array, return the next position, otherwise
 * return 0.
 * @param current - The current media item.
 * @param medias - an array of media objects
 * @returns The next media in the array.
 */

function getNextMedia(current, medias) {
    const currentPos = medias.findIndex(item => item.id === current.id);
    return currentPos + 1 < medias.length ? currentPos + 1 : 0;
};

/**
 * It returns the previous media in the array of medias
 * @param current - the current media object
 * @param medias - an array of media objects
 * @returns The index of the previous media in the array.
 */

function getBeforeMedia(current, medias) {
    const currentPos = medias.findIndex(item => item.id === current.id);
    return currentPos - 1 < medias.length ? currentPos - 1 : 0;
};

/**
 * If the imageUrl is undefined, then hide the image and display the video. Otherwise, display the
 * image and hide the video
 * @param media - the media object that is passed in from the media array
 */

const displayMedia = (media) => {
    data = {};
    const imageUrl = `assets/media/${media.image}`;
    const videoUrl = `assets/media/${media.video}`;
    console.log(imageUrl);
    if(imageUrl == "assets/media/undefined") {
        let img = document.querySelector(".lightbox-img");
        img.style.display = "none";
        let vid = document.querySelector(".lightbox-vid");
        vid.style.display = "block";
        vid.setAttribute("width", 600);
        vid.setAttribute("height", 600);
        vid.setAttribute("controls", "controls");
        sourcevid = document.createElement( 'source' );
        sourcevid.setAttribute("src", videoUrl);
        sourcevid.setAttribute("type", "video/mp4");
        vid.appendChild(sourcevid);
    } else {
        let img = document.querySelector(".lightbox-img");
        img.setAttribute("src", imageUrl);
        img.style.display = "block";
        let vid = document.querySelector(".lightbox-vid");
        vid.style.display = "none";
    }
    const description = document.querySelector(".lightbox-desc");
    description.innerHTML = media.title;
}

/**
 * It displays the modal lightbox and adds an event listener to the next button
 * @param media - the current media object
 * @param data - the data object that contains all the media
 */

function displayModalLightbox(media, data) {
    const modal2 = document.querySelector(".lightbox-modal");
	modal2.style.display = "block";
    let currentMedia = media;
    displayMedia(currentMedia);
    next.addEventListener("click", () => {
        const nextPos = getNextMedia(currentMedia, data.medias);
        currentMedia = data.medias[nextPos];
        displayMedia(currentMedia);
    });
}

/**
 * The function closes the lightbox modal by setting the display property of the modal to none.
 */

function closeModalLightbox() {
    const modal2 = document.querySelector(".lightbox-modal");
    modal2.style.display = "none";
}

/* It's getting the id of the form to check if the form is valid. */

const prenom = document.getElementById("first");
const nom =  document.getElementById("last");
const mail =  document.getElementById("email");
const message = document.getElementById("message");

/* It's a regular expression that checks if the email, firstname and lastname are valid. */

var mailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var prenomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var nomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;

const validation = document.getElementById("btn_envoyer");

/**
 * The function validate() is called when the form is submitted. It prevents the default action of the
 * form (which is to submit the form to the server). It then checks the value of the first name field.
 * If the value is empty or less than 2 characters, it displays an error message. It then checks the
 * value of the last name field. If the value is empty or less than 2 characters, it displays an error
 * message. It then checks the value of the email field. If the value is empty or does not match the
 * regular expression, it displays an error message. If all the fields are valid, it displays a success
 * message
 * @param e - the event object
 */

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

/* It's adding an event listener to the button "Envoyer" to call the function validate() when the
button is clicked. */
validation.addEventListener("click", validate);

/* It's adding an event listener to the button "Fermer" to call the function closeModalLightbox() when
the button is clicked. */
close_lightbox.addEventListener("click", closeModalLightbox);