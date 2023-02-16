/**
 * It takes in an object with a bunch of properties and returns an object with a bunch of properties.
 * @param data - {
 * @returns An object with the properties image, video, id, photographerId, price, date, and
 * getMediaCardDOM.
 */

function MediaFactory(data) {
    const { price, date, likes, title, photographerId, video, id } = data;

    const imageUrl = `assets/media/${data.image}`;
    const videoUrl = `assets/media/${video}`;

    /**
     * It creates a DOM element, appends it to the parent element, and returns the DOM element.
     * @returns the article element.
     */
    
    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.className = "link-img";
        let vid = "";
        let sourcevid = "";
        //link.setAttribute("onclick", "displayModalLightbox()");
        if(imageUrl == "assets/media/undefined") {
            vid = document.createElement( 'video' );
            vid.setAttribute("width", 500);
            vid.setAttribute("height", 500);
            vid.setAttribute("controls", "controls");
            sourcevid = document.createElement( 'source' );
            sourcevid.setAttribute("src", videoUrl);
            sourcevid.setAttribute("type", "video/mp4");
        }
        const img = document.createElement( 'img' );
        img.setAttribute("src", imageUrl)
        img.setAttribute("width", 500)
        img.setAttribute("height", 500)
        const div = document.createElement( 'div');
        div.className = "photos-grid-text";
        const div2 = document.createElement( 'div' );
        div2.className = "photos-grid-likes";
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const p = document.createElement( 'p' );
        // p.className = "";
        p.textContent = likes;
        const i = document.createElement( 'i' );
        i.className = "fa-solid fa-heart";
        // TO DO : Trouver un moyen d'additionner tout les likes et de les display sous le compteur.
        // Note à moi même : La méthode n'a sûrement pas sa place dans la factory, comme elle travaille
        // 1 par 1.
        //const coeur = document.querySelector(".likes");
        //const likestotal = 0;
        //for(let i = 0; i < data.length; i++) {
        //    likestotal = likestotal + data.likes;
        //};
        //coeur.textContent = likestotal;

        article.appendChild(link);
        if(imageUrl == "assets/media/undefined") {
            link.appendChild(vid);
            vid.appendChild(sourcevid);
        } else {
            link.appendChild(img);
        }
        article.appendChild(div);
        div.appendChild(div2);
        div.appendChild(h2);
        div2.appendChild(p);
        div2.appendChild(i);
        return (article);
    }

    return {image: imageUrl, video: videoUrl, id, photographerId, price, date, getMediaCardDOM }
}

export default MediaFactory